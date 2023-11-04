//package com.stackroute.registration.rabbitmq;
//
//import org.springframework.amqp.core.DirectExchange;
//import org.springframework.amqp.rabbit.core.RabbitTemplate;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//import com.stackroute.registration.custommessage.CustomMessage;
//
//@Component
//public class MessagePublisher {
//
//    private RabbitTemplate rabbitTemplate;
//    private DirectExchange exchange;
//
//    @Autowired
//    public MessagePublisher(RabbitTemplate rabbitTemplate, DirectExchange exchange) {
//        super();
//        this.rabbitTemplate = rabbitTemplate;
//        this.exchange = exchange;
//    }
//
//        public void sendMessageToRabbitMq(CustomMessage customMessage){
//            rabbitTemplate.convertAndSend(exchange.getName(), "user_routing", customMessage);
//        }
//    }
//
//
