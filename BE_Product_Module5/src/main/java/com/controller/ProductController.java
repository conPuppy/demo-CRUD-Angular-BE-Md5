package com.controller;

import com.model.Product;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    IProductService iProductService;
    @GetMapping
    public ResponseEntity<List<Product>> getAll() {
        return new ResponseEntity<>(iProductService.getAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(iProductService.findById(id), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@RequestBody Product product) {
        return new ResponseEntity<>(iProductService.save(product), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Product> save(@RequestBody Product product) {
        return new ResponseEntity<>(iProductService.save(product), HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") Long id) {
        iProductService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
