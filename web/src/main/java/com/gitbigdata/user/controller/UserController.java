package com.gitbigdata.user.controller;

import com.gitbigdata.user.entity.User;
import com.gitbigdata.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("user")
public class UserController {


    @Autowired
    private UserService userService;

}