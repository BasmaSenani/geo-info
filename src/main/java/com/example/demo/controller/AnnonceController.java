package com.example.demo.controller;

import java.awt.print.Pageable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Annonce;
import com.example.demo.model.Demande;
import com.example.demo.repository.AnnonceRepository;
import com.example.demo.repository.DemandeRepository;
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/")
public class AnnonceController {
	@Autowired
	private AnnonceRepository annRepo;
	

	@GetMapping("annonces")
	public List<Annonce> getAnnonce(@RequestParam(name="page",defaultValue = "0") int page  ){
		return annRepo
				.findAll(PageRequest.of(page, 6))
				.getContent();
	}

    @GetMapping("annonces/operation/{operation}")
    public List<Annonce> getAnnonceByOperation(@PathVariable(value= "operation") String operation ,
											   @RequestParam(name="page",defaultValue = "0") int page ){
        return annRepo.findByTypeOperation(PageRequest.of(page, 6),operation).getContent();
    }

    @GetMapping("annonces/type/{type}")
    public List<Annonce> getAnnonceByType(@PathVariable(value= "type") String type ,
										  @RequestParam(name="page",defaultValue = "0") int page ){
        return annRepo.findByTypeBien(PageRequest.of(page, 6),type).getContent();
    }

    @GetMapping("annonces/commune/{commune}")
    public List<Annonce> getAnnonceByCommune(@PathVariable(value= "commune") String commune ,
											 @RequestParam(name="page",defaultValue = "0") int page ){
        return annRepo.findByCommune(PageRequest.of(page, 6),commune).getContent();
    }

	@GetMapping("annoncesPages")
	public long getAnnoncePages(){
		return annRepo.findAll(PageRequest.of(0, 6)).getTotalPages();
	}


	
	@GetMapping("annonces/{id}")
	public ResponseEntity<Annonce> getInterById(@PathVariable(value= "id") Long interID) throws ResourceNotFoundException {
		Annonce inter= annRepo.findById(interID)
				.orElseThrow(() -> new ResourceNotFoundException("intermediaire not found for this id: "+ interID));
		return ResponseEntity.ok().body(inter);
	}
	
	@PostMapping("annonces")
	public Annonce createInter(@RequestBody Annonce inter) {
		return this.annRepo.save(inter);
	}
	
	@PutMapping("annonces/{id}")
	public ResponseEntity<Annonce> updateInter(@PathVariable(value= "id") Long interID, @Validated @RequestBody Annonce interDetails) throws ResourceNotFoundException{
		Annonce inter= annRepo.findById(interID)
				.orElseThrow(() -> new ResourceNotFoundException("intermediaire not found for this id: "+ interID));
		inter.setNomPrenom(interDetails.getNomPrenom());
		inter.setTelephone(interDetails.getTelephone());
		inter.setIMEI(interDetails.getIMEI());
		inter.setDescription(interDetails.getDescription());
		inter.setJustif(interDetails.getJustif());
		inter.setPoint(interDetails.getPoint());
		inter.setPrix(interDetails.getPrix());
		inter.setTypeBien(interDetails.getTypeBien());
		inter.setTypeOperation(interDetails.getTypeOperation());
		inter.setSurface(interDetails.getSurface());
		inter.setDateHeure(interDetails.getDateHeure());
		inter.setCommune(interDetails.getCommune());
		inter.setIsAvailable(interDetails.getIsAvailable());
		inter.setIsReserved(interDetails.getIsReserved());
		return ResponseEntity.ok(this.annRepo.save(inter));
		
	
}

}
