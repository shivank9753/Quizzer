package com.dracula.quizzer.Controller;

import com.dracula.quizzer.Entity.User;
import com.dracula.quizzer.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping
    public User addUser(@RequestBody User user) throws Exception {

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
       return userService.addUser(user);
    }
    @GetMapping
    public List<User> fetchAllUsers(){
        return userService.fetchAllUsers();
    }

    @GetMapping("/{userName}")
    public UserDetails loadUserByUsername(@PathVariable String userName){
       return  userService.loadUserByUsername(userName);
    }

    @ExceptionHandler(UserFoundException.class)
    public ResponseEntity<?> exceptionHandler(UserFoundException ex) {
        return ResponseEntity.ok(ex.getMessage());
    }

}
