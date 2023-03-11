package com.dracula.quizzer.Config;

import com.dracula.quizzer.Entity.User;
import com.dracula.quizzer.Service.UserService;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private UserService userService;

    @Autowired
    private  JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
       final String requestTokenHeader= request.getHeader("Authorization");

//        System.out.println(requestTokenHeader);

        String username= null;
        String jwtToken=null;

        if(requestTokenHeader!=null && requestTokenHeader.startsWith("Bearer ")){

            jwtToken= requestTokenHeader.substring(7);
           try {
               username=this.jwtUtil.extractUsername(jwtToken);
           }
           catch (ExpiredJwtException e){
               e.printStackTrace();
               System.out.println("Token has expired!!");
           }
           catch (Exception e){
               e.printStackTrace();
               System.out.println("Something went wrong");
           }
        }
        else{
            System.out.println("Invalid Token!! doesn't starts with Bearer string");
        }
        // Validation of Token

        if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null){
            UserDetails user = userService.loadUserByUsername(username);
            if(this.jwtUtil.validateToken(jwtToken,user)){
                //Token is valid
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=
                        new UsernamePasswordAuthenticationToken(user,null,user.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }

        }
        else {
            System.out.println("Invalid Token!!");
        }
        filterChain.doFilter(request, response);
    }
}
