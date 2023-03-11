package com.dracula.quizzer.Controller;

import com.dracula.quizzer.Config.JwtModel;
import com.dracula.quizzer.Config.JwtUtil;
import com.dracula.quizzer.Entity.User;
import com.dracula.quizzer.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.HashSet;

@RestController
@RequestMapping("/authenticate")
@CrossOrigin("*")

public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping("/token")
    private ResponseEntity<?> generateToken(@RequestBody JwtModel jwtModel) throws Exception {
        try {
            authenticate(jwtModel.getUsername(),jwtModel.getPassword());
        }
        catch (UsernameNotFoundException e){
            throw new Exception("User Not Found");
        }

        UserDetails user = userService.loadUserByUsername(jwtModel.getUsername());
        String token=this.jwtUtil.generateToken(user);

        System.out.println(token);
        HashMap<String,String> response= new HashMap<>();
        response.put("token",token);
        return  ResponseEntity.ok(response);
    }

    @GetMapping("/current")
    private UserDetails getCurrentUser(Principal principal){
        return  this.userService.loadUserByUsername(principal.getName());
    }

    private void authenticate(String username, String password) throws Exception {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username,password));
        }
        catch (DisabledException e){
            throw new Exception("User is Disabled!!" + e.getMessage());
        }
        catch (BadCredentialsException e){
            throw new Exception("Bad User Credentials"+ e.getMessage());
        }
    }
}
