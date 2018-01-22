package com.tech.cholla.db;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class DBClient {
	public static void main(String[] args) {
		SpringApplication.run(DBClient.class, args);
	}
}
