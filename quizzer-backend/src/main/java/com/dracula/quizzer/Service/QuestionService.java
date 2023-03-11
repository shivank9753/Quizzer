package com.dracula.quizzer.Service;

import com.dracula.quizzer.Entity.Question;
import com.dracula.quizzer.Entity.Quiz;
import com.dracula.quizzer.Repository.QuestionRepository;
import com.dracula.quizzer.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private  QuizRepository quizRepository;

    public Question addQuestion(Long quizId,Question question){
        Quiz quiz = quizRepository.findById(quizId).get();
        quiz.setIsEmpty(false);
        question.setQuiz(quiz);
        question.setQuizReferenceId(quiz.getQuizId());
        return  questionRepository.save(question);
    }
    public List<Question> getAllQuestions(){
        return  questionRepository.findAll();
    }

    public Question getQuestionById(Long questionId){
        return questionRepository.findById(questionId).get();
    }

    public List<Question> getAllQuestionsOfQuiz(Long quizId) {
        Quiz quiz = quizRepository.findById(quizId).get();
        return quiz.getQuestions();
    }

    public List<Question> getQuestionsOfQuiz(Long quizId){
        Quiz quiz = quizRepository.findById(quizId).get();

        List<Question> questions = new ArrayList<>(quiz.getQuestions());
        Collections.shuffle(questions);
        if(quiz.getNoOfQuestions()<questions.size()){
            return questions.subList(0,quiz.getNoOfQuestions().intValue());
        }
        return questions;
    }

    public Question updateQuestion(Long questionId,Long quizId,Question question){
        Question present = questionRepository.findById((questionId)).get();

        if(quizId!=null){
            Quiz quiz = quizRepository.findById(quizId).get();
            present.setQuiz(quiz);
            present.setQuizReferenceId(quizId);
        }
        if(question!=null) {
            if (question.getAnswer() != null) {
                present.setAnswer(question.getAnswer());
            }
            if (question.getImage() != null) {
                present.setImage(question.getImage());
            }
            if (question.getContent() != null) {
                present.setContent(question.getContent());
            }
            if (question.getOption1() != null) {
                present.setOption1(question.getOption1());
            }
            if (question.getOption2() != null) {
                present.setOption2(question.getOption2());
            }
            if (question.getOption3() != null) {
                present.setOption3(question.getOption3());
            }
            if (question.getOption4() != null) {
                present.setOption4(question.getOption4());
            }
        }
        return questionRepository.save(present);
    }
    public void deleteQuestion(Long quesId){
        questionRepository.deleteById(quesId);
    }


}
