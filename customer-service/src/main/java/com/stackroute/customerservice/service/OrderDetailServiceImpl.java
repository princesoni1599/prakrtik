package com.stackroute.customerservice.service;

import com.stackroute.customerservice.entity.OrderDetail;
import com.stackroute.customerservice.entity.OrderStatus;


import com.stackroute.customerservice.repository.OrderRepository;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;





@Service
public class OrderDetailServiceImpl implements OrderDetailService {


    @Autowired
    private OrderRepository orderRepository;


    @Override
    public OrderDetail BookProduct(OrderDetail orderDetail) {

        orderDetail.setOrderId("PKT" + generateString());
        List<OrderDetail> listOrderDetails =  orderRepository.findByCustomerEmailId(orderDetail.getCustomerEmailId());
      //  List<OrderDetail> listOrderDetails =  orderRepository.findByorderId(orderDetail.getOrderId());
//        CustomMessage customMessage = new CustomMessage();
//        customMessage.setProductName(orderDetail.getProductName());
//        customMessage.setProductAmount(orderDetail.getProductPrice());
//        MessagePublisher.sendMessageToRabbitMq(customMessage);
        return orderRepository.save(orderDetail);
    }

    @Override
    public List<OrderDetail> getCustomerBookingDetails(String customerEmailId) {
        List<OrderDetail> listProductBookings = (List<OrderDetail>) orderRepository.findByCustomerEmailId(customerEmailId);
        return listProductBookings;
    }

    @Override
    public List<OrderDetail> getOwnerProductDetails(String ownerEmailEmailId) {
        List<OrderDetail> listUploadedProducts = (List<OrderDetail>) orderRepository.findByOwnerEmailId(ownerEmailEmailId);
        return listUploadedProducts;
    }

    @Override
    public List<OrderDetail> getAllBookingDetails() {
        List<OrderDetail> listAllBookingDetails = this.orderRepository.findAll();
        return listAllBookingDetails;
    }





    @Override
    public OrderDetail cancelOrder(String orderId) throws Exception {
        OrderDetail orderDetail =  orderRepository.findByorderId(orderId);

        if (orderDetail != null) {

            if (orderDetail.getOrderStatus() == OrderStatus.BOOKED) {

                orderDetail.setOrderStatus(OrderStatus.CANCEL);

            } else {
                orderDetail.setOrderStatus(OrderStatus.BOOKED);
            }

            return orderRepository.save(orderDetail);

        }
        return orderDetail;
    }

    @Override
    public OrderDetail getOrderDetails(String orderId) {
        OrderDetail orderDetail = orderRepository.findByorderId(orderId);
        return orderDetail;
    }


    public String generateString() {
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                + "0123456789"
                + "abcdefghijklmnopqrstuvxyz";

        // create StringBuffer size of AlphaNumericString
        StringBuilder sb = new StringBuilder(4);

        for (int i = 0; i < 4; i++) {

            // generate a random number between
            // 0 to AlphaNumericString variable length
            int index
                    = (int)(AlphaNumericString.length()
                    * Math.random());

            // add Character one by one in end of sb
            sb.append(AlphaNumericString
                    .charAt(index));
        }
        return sb.toString();
    }

}





