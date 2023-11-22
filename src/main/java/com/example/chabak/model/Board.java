package com.example.chabak.model;

import com.example.chabak.dto.PointResponse;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.sql.Timestamp;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int id;

    @Column(nullable = false, length = 100)
    private String title;

    @Lob //대용량데이터
    private String content;

    private int count; //조회수

    @ManyToOne(fetch = FetchType.EAGER) //Many = Board, User = One  한명의 유저가 여러 게시글 작성
    @JoinColumn(name="userId")
    private User user;

    @OneToMany(mappedBy = "board", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE) //mapppedBy DB에 컬럼 생성 x
    @JsonIgnoreProperties({"board"})
    @NotFound(action = NotFoundAction.IGNORE)
    @OrderBy("id desc")
    private List<Reply> replys;

    @OneToOne(mappedBy = "board", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties({"board"})
    private PointEntry pointEntry;

    private String categoryName;

    @Column(precision = 3, scale = 2)
    @ColumnDefault("0.0")
    public BigDecimal RatingAvg;

    public void setDecimalField(BigDecimal value) {
        this.RatingAvg = value.setScale(2, RoundingMode.HALF_UP);
    }

    @CreationTimestamp
    private Timestamp createDate;
}
