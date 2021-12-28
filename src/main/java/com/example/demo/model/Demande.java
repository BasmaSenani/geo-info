package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.data.geo.Point;

import javax.persistence.JoinColumn;
@Entity
@Table(name= "demande")
public class Demande {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	/*@OneToOne
	@JoinColumn(name = "annonce_fk")*/

	private Long annonceId;
	@Column(name= "nom_prenom")
	private String nomPrenom;
	private long IMEI; 
	private String telephone;
	
	public Demande() {
		super();
	}
	public Demande(Long id, Long annonce_id, String nomPrenom, long iMEI, String telephone) {
		super();
		this.id = id;
		this.annonceId = annonce_id;
		this.nomPrenom = nomPrenom;
		IMEI = iMEI;
		this.telephone = telephone;
	
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Long getAnnonceId() {
		return annonceId;
	}
	public void setAnnonceId(Long annonceId) {
		this.annonceId = annonceId;
	}
	public String getNomPrenom() {
		return nomPrenom;
	}
	public void setNomPrenom(String nomPrenom) {
		this.nomPrenom = nomPrenom;
	}
	public long getIMEI() {
		return IMEI;
	}
	public void setIMEI(long iMEI) {
		IMEI = iMEI;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	
	
}
