package com.example.demo.repository;

import com.example.demo.model.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Demande;

import java.util.List;

@Repository
public interface DemandeRepository extends JpaRepository<Demande, Long> {

    public List<Demande> findAllByAnnonceId(Long annonceId);


}
