package com.excelr.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excelr.model.Login;
@Repository
public interface LoginRepo extends JpaRepository<Login, Integer> {
   public Login findByUsername(String username);
}
