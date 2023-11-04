package com.stackroute.customerservice.service;

import com.stackroute.customerservice.entity.OrderDetail;
import com.stackroute.customerservice.entity.OrderStatus;
import com.stackroute.customerservice.exception.ProductIsNotAvailableException;

import java.util.List;

public interface OrderDetailService {
    OrderDetail BookProduct (OrderDetail orderDetail) ;

    public List<OrderDetail> getCustomerBookingDetails (String customerEmailId);

    public List<OrderDetail> getOwnerProductDetails (String ownerEmailEmailId);


   public List<OrderDetail> getAllBookingDetails();



//    OrderDetail cancelOrder(String orderId, OrderStatus orderStatus) throws Exception;

    OrderDetail cancelOrder(String orderId)throws Exception;

    OrderDetail getOrderDetails(String orderId) ;
}
