package com.stackroute.plantmodel;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;


@Document
public class PlantModel {

    @Id// Primary key
    private String productId;
    private  String productsAvailable;
    private String ownerEmailId;
    private String shopName;
    private String productName;
    private byte[] productImage;
    private String productAge;
    private float productPrice;
    private String productAddress;
    private String waterRequirement;
    private String sunlightRequirement;
    private String sizeOfProduct;
    private String toxicity;
    private String description;

    private String ownerContactNo;



    public PlantModel() {

    }

    public PlantModel(String productId, String productsAvailable, String ownerEmailId, String shopName, String productName, byte[] productImage, String productAge, float productPrice, String productAddress, String waterRequirement, String sunlightRequirement, String sizeOfProduct, String toxicity, String description,String ownerContactNo ) {
        this.productId = productId;
        this.productsAvailable = productsAvailable;
        this.ownerEmailId = ownerEmailId;
        this.shopName = shopName;
        this.productName = productName;
        this.productImage = productImage;
        this.productAge = productAge;
        this.productPrice = productPrice;
        this.productAddress = productAddress;
        this.waterRequirement = waterRequirement;
        this.sunlightRequirement = sunlightRequirement;
        this.sizeOfProduct = sizeOfProduct;
        this.toxicity = toxicity;
        this.description = description;
        this.ownerContactNo= ownerContactNo;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductsAvailable() {
        return productsAvailable;
    }

    public void setProductsAvailable(String productsAvailable) {
        this.productsAvailable = productsAvailable;
    }

    public String getOwnerEmailId() {
        return ownerEmailId;
    }

    public void setOwnerEmailId(String ownerEmailId) {
        this.ownerEmailId = ownerEmailId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public byte[] getProductImage() {
        return productImage;
    }

    public void setProductImage(byte[] productImage) {
        this.productImage = productImage;
    }

    public String getProductAge() {
        return productAge;
    }

    public void setProductAge(String productAge) {
        this.productAge = productAge;
    }

    public float getProductPrice() {
        return productPrice;
    }

    public String getOwnerContactNo() {
        return ownerContactNo;
    }

    public void setOwnerContactNo(String ownerContactNo) {
        this.ownerContactNo = ownerContactNo;
    }

    public void setProductPrice(float productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductAddress() {
        return productAddress;
    }

    public void setProductAddress(String productAddress) {
        this.productAddress = productAddress;
    }

    public String getWaterRequirement() {
        return waterRequirement;
    }

    public void setWaterRequirement(String waterRequirement) {
        this.waterRequirement = waterRequirement;
    }

    public String getSunlightRequirement() {
        return sunlightRequirement;
    }

    public void setSunlightRequirement(String sunlightRequirement) {
        this.sunlightRequirement = sunlightRequirement;
    }

    public String getSizeOfProduct() {
        return sizeOfProduct;
    }

    public void setSizeOfProduct(String sizeOfProduct) {
        this.sizeOfProduct = sizeOfProduct;
    }

    public String getToxicity() {
        return toxicity;
    }

    public void setToxicity(String toxicity) {
        this.toxicity = toxicity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    @Override
    public String toString() {
        return "PlantModel{" +
                "productId='" + productId + '\'' +
                ", productsAvailable='" + productsAvailable + '\'' +
                ", ownerEmailId='" + ownerEmailId + '\'' +
                ", shopName='" + shopName + '\'' +
                ", productName='" + productName + '\'' +
                ", productImage=" + Arrays.toString(productImage) +
                ", productAge='" + productAge + '\'' +
                ", productPrice=" + productPrice +
                ", productAddress='" + productAddress + '\'' +
                ", waterRequirement='" + waterRequirement + '\'' +
                ", sunlightRequirement='" + sunlightRequirement + '\'' +
                ", sizeOfProduct='" + sizeOfProduct + '\'' +
                ", toxicity='" + toxicity + '\'' +
                ", description='" + description + '\'' +
                ", ownerContactNo='" + ownerContactNo + '\'' +
                '}';
    }
}