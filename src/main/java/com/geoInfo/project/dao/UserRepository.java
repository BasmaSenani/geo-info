package com.geoInfo.project.dao;

import com.geoInfo.project.model.Admin;
import com.geoInfo.project.model.Intermediaire;
import com.geoInfo.project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);

}
