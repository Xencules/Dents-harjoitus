package com.solteq.harjoitus.dents.rest;

import com.solteq.harjoitus.dents.dao.UserRepository;
import com.solteq.harjoitus.dents.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LoginController {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public LoginController(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody User user) {
        String username = user.getUsername();
        String password = user.getPassword();

        System.out.println("Login attempt: " + username + " " + password);
        user = userRepository.findByUsername(username);
        System.out.println("User: " + user.getUsername());
        System.out.println("Password: " + user.getPassword());
        boolean isAuthenticated = user != null && passwordEncoder.matches(password, user.getPassword());
        return new ResponseEntity<>(isAuthenticated, isAuthenticated ? HttpStatus.OK : HttpStatus.UNAUTHORIZED);
    }


/*    public boolean login(@RequestParam String username, @RequestParam String password) {
        System.out.println("Login attempt: " + username + " " + password);
        User user = userRepository.findByUsername(username);
        System.out.println("User: " + user.getUsername());
        System.out.println("Password: " + user.getPassword());
        return user != null && passwordEncoder.matches(password, user.getPassword());

    }*/
}
