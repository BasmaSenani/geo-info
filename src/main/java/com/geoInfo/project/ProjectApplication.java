package com.geoInfo.project;

import com.geoInfo.project.dao.AdminRepository;
import com.geoInfo.project.dao.IntermediaireRepository;
import com.geoInfo.project.model.Admin;
import com.geoInfo.project.model.Intermediaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@SpringBootApplication
public class ProjectApplication implements CommandLineRunner {
	//main test comment

	@Autowired
	private IntermediaireRepository intermediaireRepository ;

	@Autowired
	private AdminRepository adminRepository ;

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}
	public void run(String... args) throws Exception {

		intermediaireRepository.save(new Intermediaire(null,"interm1@gmail.com",
				"interm1","ROLE_INTER","aa","aa","","","","","","","","","ROLE_INTER","no"));
		intermediaireRepository.save(new Intermediaire(null,"interm2@gmail.com",
				"interm2","ROLE_INTER","aa","aa","","","","","","","","","ROLE_INTER","no"));
		intermediaireRepository.save(new Intermediaire(null,"interm3@gmail.com",
				"interm3","ROLE_INTER","aa","aa","","","","","","","","","ROLE_INTER","no"));
		intermediaireRepository.save(new Intermediaire(null,"interm4@gmail.com",
				"interm4","ROLE_INTER","aa","aa","","","","","","","","","ROLE_INTER","no"));


		adminRepository.save(new Admin(null , "admin","admin","ROLE_ADMIN"));





	}

	@Bean
	public CorsFilter corsFilter() {
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.setAllowedOriginPatterns(Arrays.asList("*"));
		config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "responseType", "Authorization"));
		config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"));
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}

}
