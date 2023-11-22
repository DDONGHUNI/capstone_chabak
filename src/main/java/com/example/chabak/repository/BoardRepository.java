package com.example.chabak.repository;

import com.example.chabak.model.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {
    Page<Board> findByCategoryName(String categoryName, Pageable pageable);

    @Query("SELECT AVG(r.rating) FROM Reply r WHERE r.board.id = :boardId")
    BigDecimal calculateRateMean(@Param("boardId") int boardId);
}
