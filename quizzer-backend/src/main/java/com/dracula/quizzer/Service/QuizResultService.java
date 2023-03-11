package com.dracula.quizzer.Service;

import com.dracula.quizzer.Entity.Question;
import com.dracula.quizzer.Entity.Quiz;
import com.dracula.quizzer.Entity.QuizResult;
import com.dracula.quizzer.Entity.User;
import com.dracula.quizzer.Repository.QuizRepository;
import com.dracula.quizzer.Repository.QuizResultRepository;
import com.dracula.quizzer.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;

@Service
public class QuizResultService {

    @Autowired
    private QuizRepository quizRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private QuizResultRepository quizResultRepository;

    public ResponseEntity<?> saveQuizResult(List<Question> questions,Long userId) {
       double marksGot=0;
       Long correctAnswers=0L;
       Long attempted=0L;
      Long attemptNo=0L;
       double perQuesMarks= (double)questions.get(0).getQuiz().getMaxMarks()/questions.size();

         for(Question question: questions){
             if(question.getMarkedAnswer()!=null){
                 attempted++;
                 if(question.getMarkedAnswer().equalsIgnoreCase(question.getAnswer())){
                     correctAnswers++;
                     marksGot+=perQuesMarks;
                 }
             }

         }
        Quiz quiz = questions.get(0).getQuiz();
        User user =  userRepository.findById(userId).get();

        attemptNo = quizResultRepository.findByAttemptNo(quiz.getQuizId(),userId)+1;

        System.out.println(LocalDate.now());

        QuizResult quizResult = QuizResult.builder()
                .quiz(quiz)
                .quizTitle(quiz.getTitle())
                .user(user)
                .userName(user.getUsername())
                .marksGot(marksGot)
                .correctAnswers(correctAnswers)
                .attempted(attempted)
                .attemptNo(attemptNo)
                .day(LocalDate.now())
                .build();


        HashMap<String,Object> result= new HashMap<String,Object>();
        result.put("attempted",attempted);
        result.put("attemptNo",attemptNo);
        result.put("correctAnswers",correctAnswers);
        result.put("marksGot",marksGot);

        quizResultRepository.save(quizResult);
        return  ResponseEntity.ok(result);

    }
}
