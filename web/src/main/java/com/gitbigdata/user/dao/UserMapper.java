package com.gitbigdata.user.dao;

import com.gitbigdata.user.entity.User;

import java.util.List;

public interface UserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

   List<User> selectByUserName(String username);

    User selectByUserId(int id);

}