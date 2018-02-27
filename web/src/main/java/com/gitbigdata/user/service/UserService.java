package com.gitbigdata.user.service;

import com.gitbigdata.user.entity.User;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface UserService {

    List<User> findUserByUserName(String username);

    void createUser(User user) throws UnsupportedEncodingException, NoSuchAlgorithmException;

    void insert(User user);

    User selectByUserId(int id);
}

