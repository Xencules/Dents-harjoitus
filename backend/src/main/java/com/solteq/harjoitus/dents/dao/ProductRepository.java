package com.solteq.harjoitus.dents.dao;

import com.solteq.harjoitus.dents.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path="products")
public interface ProductRepository extends JpaRepository<Product, Integer> {

    Product findByProductId(String theProductId);
}
