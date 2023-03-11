package com.dracula.quizzer.Controller;

import com.dracula.quizzer.Entity.Category;
import com.dracula.quizzer.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public ResponseEntity<?> addCategory(@RequestBody Category category){
        return  ResponseEntity.ok(categoryService.addCategory(category));
    }

    @GetMapping
    public ResponseEntity<?> getAllCategories(){
        return ResponseEntity.ok(categoryService.getAllCategories());
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getCategoryById(@PathVariable("id") Long categoryId){
        return ResponseEntity.ok(categoryService.getCategoryById(categoryId));
    }
    @PutMapping("/{id}")
    public ResponseEntity<?>  updateCategory(@PathVariable("id") Long categoryId,
                                    @RequestBody Category category){
        return ResponseEntity.ok(categoryService.updateCategory(categoryId,category));
    }
    @DeleteMapping("/{id}")
    public void  deleteCategory(@PathVariable("id") Long categoryId){
         categoryService.deleteCategory(categoryId);
    }
}
