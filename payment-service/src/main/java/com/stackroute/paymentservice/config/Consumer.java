//package com.stackroute.paymentservice.config;
//
//import com.stackroute.paymentservice.rabbitmq.domain.OrderDTO;
//import com.stackroute.paymentservice.service.StripeService;
//import org.springframework.amqp.rabbit.annotation.RabbitListener;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//@Component
//public class Consumer {
//
//    @Autowired
//    private StripeService stripeService;
//
//    @RabbitListener(queues="user_queue")
//    public void getUserDtoFromRabbitMq(OrderDTO orderDto)
//    {
//        System.out.println(orderDto.toString());
//    }
//}
