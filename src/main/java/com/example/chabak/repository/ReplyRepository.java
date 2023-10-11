package com.example.chabak.repository;

import com.example.chabak.model.Reply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;



public interface ReplyRepository extends JpaRepository<Reply, Integer>{

    @Modifying
    @Query(value="INSERT INTO reply(userId, boardId, content, rating, createDate) VALUES(?1, ?2, ?3, ?4, now())", nativeQuery = true)
    int mSave(int userId, int boardId, String content, double rating);
}
