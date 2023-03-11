package com.dracula.quizzer.Service;

import com.dracula.quizzer.Entity.Category;
import com.dracula.quizzer.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category addCategory(Category category){
       return categoryRepository.save(category);
    }

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }
    public Category getCategoryById(Long categoryId){
        return categoryRepository.findById(categoryId).get();
    }
    public Category updateCategory(Long categoryId,Category category){
        Category present = categoryRepository.findById(categoryId).get();
        if(category.getDescription()!=null){
            present.setDescription(category.getDescription());
        }
        if(category.getTitle()!=null){
            present.setTitle(category.getTitle());
        }
        if (category.getCreatedBy()!=null){
            present.setCreatedBy(category.getCreatedBy());
        }
        return categoryRepository.save(present);
    }

    public void deleteCategory(Long categoryId){
        categoryRepository.deleteById(categoryId);
    }

}
