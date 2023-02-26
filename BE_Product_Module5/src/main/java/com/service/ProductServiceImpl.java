package com.service;

import com.model.Product;
import com.repository.IProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductServiceImpl implements IProductService{
    @Autowired
    IProductRepo iProductRepo;
    @Override
    public List<Product> getAll() {
        return (List<Product>) iProductRepo.findAll();
    }
    @Override
    public Product save(Product product) {
        return iProductRepo.save(product);
    }
    @Override
    public void delete(Long id) {
        iProductRepo.deleteById(id);
    }
    @Override
    public Product findById(Long id) {
       return iProductRepo.findById(id).get();
    }

}
