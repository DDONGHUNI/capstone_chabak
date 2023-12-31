package com.example.chabak.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int id;

    @Column(nullable = false, length = 200)
    private String content;

    @NotNull
    private double rating;

    @ManyToOne
    @JoinColumn(name="boardId")
    private Board board;

    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    @CreationTimestamp
    private LocalDateTime createDate;


    @Override
    public String toString() {
        return "Reply [id=" + id + ", content=" + content + ", rating=" + rating + ", board=" + board + ", user=" + user + ", createDate="
                + createDate + "]";
    }
}
