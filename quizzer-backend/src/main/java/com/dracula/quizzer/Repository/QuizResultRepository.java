package com.dracula.quizzer.Repository;

import com.dracula.quizzer.Entity.QuizResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizResultRepository extends JpaRepository<QuizResult,Long> {

    @Query(value = "select count(*) from quiz_result where quiz_id=?1 and user_id=?2",nativeQuery = true)
    public Long findByAttemptNo(Long quizId,Long userId);
}
