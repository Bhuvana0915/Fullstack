package com.excelr.model;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
   private long id;
   private long userId;
   
   
   @OneToMany(mappedBy = "cart")
   private List<CartItem> items=new ArrayList<>();
   private Date createdAt=new Date();
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public long getUserId() {
	return userId;
}
public void setUserId(long userId) {
	this.userId = userId;
}
public List<CartItem> getItems() {
	return items;
}
public void setItems(List<CartItem> items) {
	this.items = items;
}
public Date getCreatedAt() {
	return createdAt;
}
public void setCreatedAt(Date createdAt) {
	this.createdAt = createdAt;
}
      
}