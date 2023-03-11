package com.dracula.quizzer.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "quiz_result")
public class QuizResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quizResultId;


    @ManyToOne(optional = false)
    @JoinColumn(name = "quiz_id",
               referencedColumnName = "quizId")
    private Quiz quiz;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id",
            referencedColumnName = "userId")
    private User user;

    private String userName;
    private String quizTitle;
    private Long correctAnswers;
    private Long attempted;
    private double marksGot;
    private Long attemptNo;
    private LocalDate day;

}
