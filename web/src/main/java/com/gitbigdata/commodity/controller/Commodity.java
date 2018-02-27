package com.gitbigdata.commodity.controller;

import com.gitbigdata.common.utils.SecurityUtils;
import com.gitbigdata.user.entity.User;
import com.gitbigdata.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@Controller
@RequestMapping("index")
public class Commodity {

    @Autowired
    private UserService userService;

    @RequestMapping
    public String index(){
        return "index";
    }
    @RequestMapping("/details")
    public String details(){
        return "details";
    }

    @RequestMapping("/check")
    @ResponseBody
    public String checkLogin(HttpServletRequest request) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        String user_name =  request.getParameter("username");
        String pwd = request.getParameter("password");

//         查询数据库 调用MD5对比加密   校验成功，用户信息存session 进入首页，如果失败，提示账号密码出错
        List<User> user = userService.findUserByUserName(user_name);
        System.out.println("拿到了");
        int i = 0;
        for( i = 0 ; i<user.size();i++) {
            if (SecurityUtils.checkPassword(pwd, user.get(i).getPassword())) {
//                    HttpSession session = request.getSession();
//                    session.setAttribute("loginName", user_name);
                break;
            }
        }
        if(i<user.size()){
            return "login_succ";
        }else {
            return "error";
        }
    }

    @RequestMapping("/register")
    @ResponseBody
    public String register(HttpServletRequest request) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        User user = new User();
        user.setUserName( request.getParameter("username"));
        user.setPassword(SecurityUtils.encryptPassword(request.getParameter("password")));
        userService.insert(user);
        return "register_succ";
    }
}
