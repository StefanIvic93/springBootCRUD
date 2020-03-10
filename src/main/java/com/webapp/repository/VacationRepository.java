package com.webapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.model.Vacation;

public interface VacationRepository extends JpaRepository<Vacation, Long> {

}
