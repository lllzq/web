package com.gitbigdata.login.controller;

import com.gitbigdata.common.utils.SecurityUtils;
import com.gitbigdata.user.entity.User;
import com.gitbigdata.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@Controller
    @RequestMapping("login")
public class LoginController {
        @Autowired
    private UserService userService;
    private SecurityUtils securityUtils;
        @RequestMapping
        public String login(){

            return "login";
//            return "/WEB-INF/views/login.vm";
        }

        @RequestMapping("/zhuce")
        public String zhuce(){
            return "register";
        }





    }
