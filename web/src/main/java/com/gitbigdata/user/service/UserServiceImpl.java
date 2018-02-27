package com.gitbigdata.user.service;

import com.gitbigdata.common.utils.SecurityUtils;
import com.gitbigdata.user.dao.UserMapper;
import com.gitbigdata.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service("userServiceImpl")
public class UserServiceImpl implements UserService {

   @Autowired
   private UserMapper userMapper;


   @Override
   public List<User> findUserByUserName(String username) {
      List<User> user = userMapper.selectByUserName(username);

      return user;
   }



   @Override
   public void createUser(User user) throws UnsupportedEncodingException, NoSuchAlgorithmException {

      user.setPassword(SecurityUtils.encryptPassword(user.getPassword()));

      userMapper.insertSelective(user);
   }

   @Override
   public void insert(User user) {
      System.out.println("开始插入了");
      userMapper.insertSelective(user);

   }

   @Override
   public User selectByUserId(int id) {
      User user = userMapper.selectByUserId(id);
      return user;
   }
}
