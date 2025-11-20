package com.excelr.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class CartItem {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private int id;
   @ManyToOne
   @JoinColumn(name="cart_id")
   private Cart cart;
   private long productId;
   private int quantity;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public Cart getCart() {
	return cart;
}
public void setCart(Cart cart) {
	this.cart = cart;
}
public long getProductId() {
	return productId;
}
public void setProductId(long productId) {
	this.productId = productId;
}
public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
   
   
   
}
