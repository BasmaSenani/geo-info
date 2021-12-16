package com.geoInfo.project.controller;

import com.geoInfo.project.dao.UserRepository;
import com.geoInfo.project.model.Intermediaire;
import com.geoInfo.project.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

public class UserController {

    @Autowired
    UserRepository userRepository ;

    @RequestMapping(method= RequestMethod.GET, value="/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
