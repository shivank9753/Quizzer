package com.dracula.quizzer.Service;

import com.dracula.quizzer.Entity.User;
import com.dracula.quizzer.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;


    public User addUser(User user) throws Exception {
        if(userRepository.findByUsername(user.getUsername())!=null){
            throw new Exception("username: " + user.getUsername()+ " already taken!!!");
        }
       return userRepository.save(user);
    }
    public List<User> fetchAllUsers(){
        return userRepository.findAll();
    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = this.userRepository.findByUsername(username);
        if (user == null) {
            System.out.println("User not found");
            throw new UsernameNotFoundException("No user found !!");
        }

        return user;
    }
}
