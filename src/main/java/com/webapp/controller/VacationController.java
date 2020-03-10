package com.webapp.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.model.Vacation;
import com.webapp.repository.VacationRepository;

@RestController
@RequestMapping("api/v1")
public class VacationController {
	
	@Autowired
	private VacationRepository vacationRepository;
	
	@RequestMapping(value = "vacations", method = RequestMethod.GET)
	public List<Vacation> list(){
		return vacationRepository.findAll();
	}
	@RequestMapping(value = "vacations", method = RequestMethod.POST)
	public Vacation create(@RequestBody Vacation vacation) {
		return vacationRepository.saveAndFlush(vacation);	
	}
	@RequestMapping(value = "vacations/{id}", method = RequestMethod.GET)
	public Vacation get(@PathVariable Long id) {
		return vacationRepository.findOne(id);	
	}
	@RequestMapping(value = "vacations/{id}", method = RequestMethod.PUT)
	public Vacation update(@PathVariable Long id, @RequestBody Vacation vacation) {
		Vacation existingVacation = vacationRepository.findOne(id);
		BeanUtils.copyProperties(vacation, existingVacation);
		return vacationRepository.saveAndFlush(existingVacation);	
	}
	@RequestMapping(value = "vacations/{id}", method = RequestMethod.DELETE)
	public Vacation delete(@PathVariable Long id) {
		Vacation existingVacation = vacationRepository.findOne(id);
		vacationRepository.delete(existingVacation);
		return existingVacation;	
	}

}
