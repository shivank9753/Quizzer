package com.dracula.quizzer.Repository;

import com.dracula.quizzer.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUsername(String userName);
}
