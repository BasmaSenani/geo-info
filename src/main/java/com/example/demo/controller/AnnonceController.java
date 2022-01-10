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
	

	@GetMapping("allCommunes")
	public List<String> getAllCommunes(){
		return annRepo.findAllCommune();
	}
	@GetMapping("annonces")
	public List<Annonce> getAnnonce(@RequestParam(name="page",defaultValue = "0") int page  ){
		return annRepo
				.findAll(PageRequest.of(page, 6))
				.getContent();
	}

    @GetMapping("annonces/inter/{id}")
    public List<Annonce> getByIdInter(@PathVariable Long id ,
                                      @RequestParam(name="page",defaultValue = "0") int page){
        return annRepo.findAllByIdInter(PageRequest.of(page,6),id).getContent();
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
	public Annonce updateAnnonce(@PathVariable Long id,  @RequestBody Annonce interDetails) throws ResourceNotFoundException{
        return annRepo.findById(id)
                .map(annonce -> {
                    annonce.setNomPrenom(interDetails.getNomPrenom());
                    annonce.setTelephone(interDetails.getTelephone());
                    annonce.setIMEI(interDetails.getIMEI());
                    annonce.setDescription(interDetails.getDescription());
                    annonce.setJustif(interDetails.getJustif());
                    annonce.setPoint(interDetails.getPoint());
                    annonce.setPrix(interDetails.getPrix());
                    annonce.setTypeBien(interDetails.getTypeBien());
                    annonce.setTypeOperation(interDetails.getTypeOperation());
                    annonce.setSurface(interDetails.getSurface());
                    annonce.setDateHeure(interDetails.getDateHeure());
                    annonce.setCommune(interDetails.getCommune());
                    annonce.setIsAvailable(interDetails.getIsAvailable());
                    annonce.setIsReserved(interDetails.getIsReserved());
                    annonce.setId_inter(interDetails.getId_inter());
                    return annRepo.save(annonce);
                })
                .orElseGet(() -> {
                    interDetails.setGid(id);
                    return annRepo.save(interDetails);
                });
		
	
}


}
