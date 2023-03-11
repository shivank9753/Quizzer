package com.dracula.quizzer.Controller;

import com.dracula.quizzer.Entity.Question;
import com.dracula.quizzer.Service.QuizResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz-result")
@CrossOrigin("*")
public class QuizResultController {

    @Autowired
    private QuizResultService quizResultService;

    @PostMapping
    private ResponseEntity<?> saveQuizResult(@RequestBody List<Question> questions,
                                             @RequestParam Long userId){
      return quizResultService.saveQuizResult(questions,userId);
    }
}
