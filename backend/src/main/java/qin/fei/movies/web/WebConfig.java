package qin.fei.movies.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("http://localhost:3000") // 允许前端域名的请求
				.allowedMethods("GET","POST","PUT","DELETE","OPTIONS")// 允许的请求方法
				.allowCredentials(true)// 允许发送cookies
				.allowedHeaders("*")// 允许的请求头
				.maxAge(3600);// 预检请求的缓存时间
	}
	
}
