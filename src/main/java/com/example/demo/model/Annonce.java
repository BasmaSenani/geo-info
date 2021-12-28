package com.example.demo.model;


import java.sql.Blob;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name= "annonce")
public class Annonce{
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long gid;
	@Column(name= "nom_prenom")
	private String nomPrenom;
	private long IMEI; 
	private String telephone;
	private Blob justif;
	private String prix ;
	private String typeBien ;
	private String typeOperation ;
	private String description;
	private String surface;
	private Date dateHeure;
	private boolean isAvailable ;
	private boolean isReserved ;
	public Annonce() {
		super();
	}
	public Annonce(Long gid, String nomPrenom, long iMEI, String telephone, Blob justif, String prix, String typeBien,
			String typeOperation, String description, String surface, Date dateHeure, String commune, String point,
			Blob photo, boolean isReserved, boolean isAvailable) {
		super();
		this.gid = gid;
		this.nomPrenom = nomPrenom;
		IMEI = iMEI;
		this.telephone = telephone;
		this.justif = justif;
		this.prix = prix;
		this.typeBien = typeBien;
		this.typeOperation = typeOperation;
		this.description = description;
		this.surface = surface;
		this.dateHeure = dateHeure;
		this.commune = commune;
		this.point = point;
		this.photo = photo;
		this.isReserved=isReserved;
		this.isAvailable= isAvailable;
	}
	public Long getGid() {
		return gid;
	}
	public void setGid(Long gid) {
		this.gid = gid;
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
	public Blob getJustif() {
		return justif;
	}
	public void setJustif(Blob justif) {
		this.justif = justif;
	}
	public boolean getIsAvailable() {
		return isAvailable;
	}
	public void setIsAvailable(boolean IsAvailable) {
		this.isAvailable = IsAvailable;
	}
	public boolean getIsReserved() {
		return isAvailable;
	}
	public void setIsReserved(boolean IsReserved) {
		this.setReserved(IsReserved);
	}
	public String getPrix() {
		return prix;
	}
	public void setPrix(String prix) {
		this.prix = prix;
	}
	public String getTypeBien() {
		return typeBien;
	}
	public void setTypeBien(String typeBien) {
		this.typeBien = typeBien;
	}
	public String getTypeOperation() {
		return typeOperation;
	}
	public void setTypeOperation(String typeOperation) {
		this.typeOperation = typeOperation;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSurface() {
		return surface;
	}
	public void setSurface(String surface) {
		this.surface = surface;
	}
	public Date getDateHeure() {
		return dateHeure;
	}
	public void setDateHeure(Date dateHeure) {
		this.dateHeure = dateHeure;
	}
	public String getCommune() {
		return commune;
	}
	public void setCommune(String commune) {
		this.commune = commune;
	}
	public String getPoint() {
		return point;
	}
	public void setPoint(String point) {
		this.point = point;
	}
	public Blob getPhoto() {
		return photo;
	}
	public void setPhoto(Blob photo) {
		this.photo = photo;
	}
	public boolean isReserved() {
		return isReserved;
	}
	public void setReserved(boolean isReserved) {
		this.isReserved = isReserved;
	}
	private String commune;
	@Column(name= "geom", columnDefinition= "geometry")
	private String point;
	private Blob photo;
	
}
