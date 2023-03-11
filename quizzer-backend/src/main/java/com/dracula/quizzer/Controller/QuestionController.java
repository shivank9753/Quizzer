package com.dracula.quizzer.Controller;

import com.dracula.quizzer.Entity.Question;
import com.dracula.quizzer.Entity.Quiz;
import com.dracula.quizzer.Repository.QuestionRepository;
import com.dracula.quizzer.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping
    public ResponseEntity<?> addQuestion(@RequestParam(required = true) Long quizId,
                                         @RequestBody Question question){
        return  ResponseEntity.ok(questionService.addQuestion(quizId, question));
    }
    @GetMapping
    public  ResponseEntity<?> getAllQuestions(){
        return  ResponseEntity.ok(questionService.getAllQuestions());
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getQuestionById(@PathVariable("id") Long questionId){
        return  ResponseEntity.ok(questionService.getQuestionById(questionId));
    }
    @GetMapping("/quiz/{id}")
    public  ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("id") Long quizId){
        return  ResponseEntity.ok(questionService.getQuestionsOfQuiz(quizId));
    }

    @GetMapping("/quiz/{id}/all")
    public ResponseEntity<?> getAllQuestionsOfQuiz(@PathVariable("id") Long quizId){
        return  ResponseEntity.ok(questionService.getAllQuestionsOfQuiz(quizId));
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateQuestion( @PathVariable("id") Long questionId,
                                             @RequestParam(required = false) Long quizId,
                                             @RequestBody(required = false) Question question){
        return ResponseEntity.ok(questionService.updateQuestion(questionId,quizId,question));
    }
    @DeleteMapping("/{id}")
    public  void deleteQuestion(@PathVariable("id") Long quesId){
        questionService.deleteQuestion(quesId);
    }
}
