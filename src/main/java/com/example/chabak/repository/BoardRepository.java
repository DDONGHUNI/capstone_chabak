package com.example.chabak.repository;

import com.example.chabak.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Integer> {

}
