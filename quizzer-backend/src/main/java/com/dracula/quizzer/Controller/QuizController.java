package com.dracula.quizzer.Controller;

import com.dracula.quizzer.Entity.Quiz;
import com.dracula.quizzer.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping
    public ResponseEntity<?> addQuiz(@RequestParam(required = true) Long categoryId,
                                     @RequestBody Quiz quiz){
        return ResponseEntity.ok(quizService.addQuiz(categoryId,quiz));
    }

    @GetMapping
    public ResponseEntity<?> getAllQuizzes(){
        return ResponseEntity.ok(quizService.getAllQuizzes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getQuizById(@PathVariable("id") Long quizId){
        return  ResponseEntity.ok(quizService.getQuizById(quizId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateQuiz(@PathVariable("id") Long quizId,
                                        @RequestParam(required = false) Long categoryId,
                                        @RequestBody(required = false) Quiz quiz){
        return  ResponseEntity.ok(quizService.updateQuiz(quizId,categoryId,quiz));
    }

    @DeleteMapping("/{id}")
    public  void deleteQuiz(@PathVariable("id") Long quizId){
        quizService.deleteQuiz(quizId);
    }
}

