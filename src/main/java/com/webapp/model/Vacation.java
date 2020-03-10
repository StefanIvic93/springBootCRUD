package com.webapp.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vacation {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String country;
	private String destination;
	private String transportation;
	private Integer distance;
	private String departureDate;
	private String returnDate;
	private Integer price;

	public Vacation() { }

	public Vacation(Long id, String country, String destination, String transportation, Integer distance, String departureDate, String returnDate, Integer price) {
		this.id = id;
		this.country = country;
		this.destination = destination;
		this.transportation = transportation;
		this.distance = distance;
		this.departureDate = departureDate;
		this.returnDate = returnDate;
		this.price = price;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getTransportation() {
		return transportation;
	}

	public void setTransportation(String transportation) {
		this.transportation = transportation;
	}

	public Integer getDistance() {
		return distance;
	}

	public void setDistance(Integer distance) {
		this.distance = distance;
	}

	public String getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}

	public String getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(String returnDate) {
		this.returnDate = returnDate;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}
}
