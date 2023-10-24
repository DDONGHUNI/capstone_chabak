package com.example.chabak.repository;

import com.example.chabak.model.PointEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PointEntryRepository extends JpaRepository<PointEntry, Integer> {
}