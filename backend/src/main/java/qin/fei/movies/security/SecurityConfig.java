package qin.fei.movies.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig{

 @Bean
 public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
	 http
	 	.csrf(csrf -> csrf.disable())
	 	.authorizeHttpRequests(authz -> authz
	 			.requestMatchers("/api/v1/users/register").permitAll()  // 允许所有人访问注册接口
	 			.anyRequest().authenticated()
	 			)
	 	.cors(Customizer.withDefaults())
 		.httpBasic(withDefaults());
 	return http.build();
 }
 
 private Customizer<HttpBasicConfigurer<HttpSecurity>> withDefaults() {
     return Customizer.withDefaults();
 }
 
 @Bean
 public PasswordEncoder passwordEncoder() {
     return new BCryptPasswordEncoder();
 }
 


}
