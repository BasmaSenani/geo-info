package com.example.demo.repository;

import com.example.demo.model.Demande;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Annonce;

import java.util.List;

@Repository
public interface AnnonceRepository extends JpaRepository<Annonce, Long> {

    public Page<Annonce> findByTypeOperation(Pageable page , String operation);
    public Page<Annonce> findByTypeBien(Pageable page ,String type);
    public Page<Annonce> findByCommune(Pageable page ,String commune);



}
