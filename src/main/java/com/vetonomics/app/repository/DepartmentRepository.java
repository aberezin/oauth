package com.vetonomics.app.repository;

import com.vetonomics.app.domain.Department;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Department entity.
 */
@SuppressWarnings("unused")
public interface DepartmentRepository extends JpaRepository<Department,Long> {

}
