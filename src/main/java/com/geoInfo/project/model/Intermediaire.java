package com.geoInfo.project.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import net.bytebuddy.implementation.bytecode.constant.DefaultValue;

import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor @ToString
@Entity

public class Intermediaire extends User{
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username ;

    private String password ;
    private String roles ;
    private String firstName;

    private String lastName;

    private String Email;

    private String Telephone;
    
    private String Adresse;
    
    private String N_RC;
    
    private String ville;
    
    private String gerant_Name;
    
    private String Commune1;
    
    private String Commune2;
    
    private String Commune3;

    private String isVerified = "no";

}
