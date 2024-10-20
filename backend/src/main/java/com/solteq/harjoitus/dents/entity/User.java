package com.solteq.harjoitus.dents.entity;

import jakarta.persistence.*;

@Entity
@Table(name="user")
public class User {
    // Fields

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="username", unique = true)
    private String username;

    @Column(name="password")
    private String password;



    public User() {
    }
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters / Setters

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getId() {
        return id;
    }


}
