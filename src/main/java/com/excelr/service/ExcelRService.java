package com.excelr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excelr.model.Laptops;
import com.excelr.model.Login;
import com.excelr.model.Mobiles;
import com.excelr.model.Headphones;
import com.excelr.repo.LaptopsRepo;
import com.excelr.repo.LoginRepo;
import com.excelr.repo.HeadphonesRepo;
import com.excelr.repo.MobilesRepo;

@Service
public class ExcelRService {
   @Autowired
   private LaptopsRepo laptopsRepo;
   @Autowired
   private MobilesRepo mobilesRepo;
   @Autowired
   private HeadphonesRepo headphonesRepo;
   @Autowired
   private LoginRepo loginRepo;
   
   
   public List<Laptops> getAllLaptops(){
	   return laptopsRepo.findAll();
   }
   public List<Mobiles> getAllMobiles(){
	   return mobilesRepo.findAll();
   }
   public List<Headphones> getAllHeadphones(){
	   return headphonesRepo.findAll();
   }
   public Login performLogin(String username) {
	   return loginRepo.findByUsername(username);
   }
   
}
