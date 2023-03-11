package com.dracula.quizzer.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quesId;

     private String content;
     private String image;
     private String option1;
     private String option2;
     private String option3;
     private String option4;
     private String answer;

     @Transient
     private String markedAnswer;
     private String createdBy;
    @ManyToOne(fetch = FetchType.EAGER,optional = false)
    @JoinColumn(
                name = "quiz_id",
                referencedColumnName = "quizId",
                nullable = false
                )
    private Quiz quiz;

    private  Long quizReferenceId ;

}
