package com.example.chabak.repository;

import com.example.chabak.model.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {
    Page<Board> findByCategoryName(String categoryName, Pageable pageable);
}
