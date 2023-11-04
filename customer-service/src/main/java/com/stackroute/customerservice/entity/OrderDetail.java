package com.stackroute.customerservice.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document
public class OrderDetail {
    @Id
    private String orderId;

    private String customerName;
    private String customerEmailId;
    private String ownerEmailId;
    private String shopName;
    private String productId;
    private String productName;
    private String customerAddress;
    private String ownerAddress;
    private String cutomerContactNo;
    private  String ownerContactNo;
    private String orderDate;
    private OrderStatus orderStatus;
    private String productPrice;

    public OrderDetail() {

    }

    public OrderDetail(String orderId, String customerName, String customerEmailId, String ownerEmailId, String shopName, String productId, String productName, String customerAddress, String ownerAddress, String cutomerContactNo, String ownerContactNo, String orderDate, OrderStatus orderStatus, String productPrice) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.customerEmailId = customerEmailId;
        this.ownerEmailId = ownerEmailId;
        this.shopName = shopName;
        this.productId = productId;
        this.productName = productName;
        this.customerAddress = customerAddress;
        this.ownerAddress = ownerAddress;
        this.cutomerContactNo = cutomerContactNo;
        this.ownerContactNo = ownerContactNo;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
        this.productPrice = productPrice;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmailId() {
        return customerEmailId;
    }

    public void setCustomerEmailId(String customerEmailId) {
        this.customerEmailId = customerEmailId;
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

    public void setShopName(String ownerName) {
        this.shopName = ownerName;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getOwnerAddress() {
        return ownerAddress;
    }

    public void setOwnerAddress(String ownerAddress) {
        this.ownerAddress = ownerAddress;
    }

    public String getCutomerContactNo() {
        return cutomerContactNo;
    }

    public void setCutomerContactNo(String cutomerContactNo) {
        this.cutomerContactNo = cutomerContactNo;
    }

    public String getOwnerContactNo() {
        return ownerContactNo;
    }

    public void setOwnerContactNo(String ownerContactNo) {
        this.ownerContactNo = ownerContactNo;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(String productPrice) {
        this.productPrice = productPrice;
    }
}
