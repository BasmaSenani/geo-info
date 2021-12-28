package com.example.demo.controller;

import java.util.List;

import com.example.demo.model.Annonce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Demande;
import com.example.demo.repository.DemandeRepository;

@RestController
@RequestMapping("api/v1/")
public class DemandeController {
	@Autowired
	private DemandeRepository demRepo;
	

	@GetMapping("demandes")
	public List<Demande> getAll() {
		return this.demRepo.findAll();
	}

	@GetMapping("demandes2/{idAnnonce}")
	public List<Demande> getAllAnnonceByIdAnnonce(@PathVariable(value= "idAnnonce") Long idAnnonce){
		return this.demRepo.findAllByAnnonceId(idAnnonce);
	}
	
	@GetMapping("demandes/{id}")
	public ResponseEntity<Demande> getInterById(@PathVariable(value= "id") Long interID) throws ResourceNotFoundException {
		Demande inter= demRepo.findById(interID)
				.orElseThrow(() -> new ResourceNotFoundException("intermediaire not found for this id: "+ interID));
		return ResponseEntity.ok().body(inter);
	}
	
	@PostMapping("demandes")
	public Demande createInter(@RequestBody Demande inter) {
		return this.demRepo.save(inter);
	}
	
	/*@PutMapping("demandes/{id}")
	public ResponseEntity<Demande> updateInter(@PathVariable(value= "id") Long interID, @Validated @RequestBody Demande interDetails) throws ResourceNotFoundException{
		Demande inter= demRepo.findById(interID)
				.orElseThrow(() -> new ResourceNotFoundException("intermediaire not found for this id: "+ interID));
		inter.setNomPrenom(interDetails.getNomPrenom());
		inter.setTelephone(interDetails.getTelephone());
		inter.setAnnonce(interDetails.getAnnonce());
		inter.setIMEI(interDetails.getIMEI());
		return ResponseEntity.ok(this.demRepo.save(inter));
    }*/
}
