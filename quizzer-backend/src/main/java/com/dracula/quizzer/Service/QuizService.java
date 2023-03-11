package com.dracula.quizzer.Service;

import com.dracula.quizzer.Entity.Category;
import com.dracula.quizzer.Entity.Quiz;
import com.dracula.quizzer.Repository.CategoryRepository;
import com.dracula.quizzer.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public Quiz addQuiz(Long categoryId,Quiz quiz){
        Category category = categoryRepository.findById(categoryId).get();
        quiz.setCategory(category);
        quiz.setCategoryReferenceId(category.getCategoryId());
        return quizRepository.save(quiz);
    }

    public List<Quiz> getAllQuizzes(){
        return quizRepository.findAll();
    }

    public Quiz getQuizById(Long quizId){
        return  quizRepository.findById(quizId).get();
    }

    public Quiz updateQuiz(Long quizId,Long categoryId,Quiz quiz){
        Quiz present= quizRepository.findById(quizId).get();
        if (categoryId!=null){
            Category category = categoryRepository.findById(categoryId).get();
            present.setCategory(category);
            present.setCategoryReferenceId(categoryId);
        }
        if(quiz!=null) {
            if (quiz.getTitle() != null) {
                present.setTitle(quiz.getTitle());
            }
            if (quiz.getActive() != null) {
                present.setActive(quiz.getActive());
            }
            if (quiz.getCreatedBy() != null) {
                present.setCreatedBy(quiz.getCreatedBy());
            }
            if (quiz.getDescription() != null) {
                present.setDescription(quiz.getDescription());
            }
            if (quiz.getMaxMarks() != null) {
                present.setMaxMarks(quiz.getMaxMarks());
            }
            if (quiz.getNoOfQuestions() != null) {
                present.setNoOfQuestions(quiz.getNoOfQuestions());
            }
        }
       return quizRepository.save(present);
    }

    public void deleteQuiz(Long quizId){
        quizRepository.deleteById(quizId);
    }
}
