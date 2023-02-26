package com.service;

import com.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> getAll();

    Product save(Product product);

    void delete(Long id);

    Product findById(Long id);
}
