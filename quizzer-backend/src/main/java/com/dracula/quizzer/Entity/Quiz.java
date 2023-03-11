package com.dracula.quizzer.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Quiz")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quizId;

    @Column(unique = true,nullable = false)
    private String title;

    private String description;
    private Long maxMarks;
    private Long noOfQuestions;
    private Boolean active=false;

    @Column(nullable = false,length = 2000)
    private String createdBy;

    private Boolean isEmpty=true;

    @OneToMany(mappedBy = "quiz",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Question> questions;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(
                name = "category_id",
                referencedColumnName ="categoryId",
                nullable = false
                )
    private Category category;

    private Long categoryReferenceId;

}
