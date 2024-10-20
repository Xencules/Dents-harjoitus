package com.solteq.harjoitus.dents.entity;

import jakarta.persistence.*;

@Entity
@Table(name="product")
public class Product {

    // fields

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="product_id", unique = true)
    private String productId;
    @Column(name="name")
    private String productName;
    @Column(name="weight")
    private int productWeight;
    @Column(name="energy")
    private int productEnergy;

    @Column(name="image", length = 65535)
    private String image;

    // constructors

    public Product() {

    }

    public Product(int id, String productId, String productName, int productWeight, int productEnergy, String image) {
        this.id = id;
        this.productId = productId;
        this.productName = productName;
        this.productWeight = productWeight;
        this.productEnergy = productEnergy;
        this.image = image;
    }

    // getters / setters


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductID() {
        return productId;
    }

    public void setProductID(String productID) {
        this.productId = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getProductWeight() {
        return productWeight;
    }

    public void setProductWeight(int productWeight) {
        this.productWeight = productWeight;
    }

    public int getProductEnergy() {
        return productEnergy;
    }

    public void setProductEnergy(int productEnergy) {
        this.productEnergy = productEnergy;
    }

    public String getImage() {
        return image;
    }

    // toString
    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productId='" + productId + '\'' +
                ", productName='" + productName + '\'' +
                ", productWeight=" + productWeight +
                ", productEnergy=" + productEnergy +
                '}';
    }
}
