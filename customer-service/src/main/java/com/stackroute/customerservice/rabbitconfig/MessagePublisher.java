//package com.stackroute.customerservice.rabbitconfig;
//
//import com.stackroute.customerservice.custommessage.CustomMessage;
//
//import org.springframework.amqp.rabbit.core.RabbitTemplate;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//@Component
//public class MessagePublisher {
//
//    @Autowired
//    private RabbitTemplate template;
//
//    // @RabbitListener(queues ="MQConfig.QUEUE")
//
//    public String publishMessage(CustomMessage message){
//
//        template.convertAndSend(MQconfig.EXCHANGE,MQconfig.ROUTING_KEY,message);
//        return ("message published");
//    }
//}

//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.stackroute.customerservice.rabbitconfig;


import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.stackroute.registration.custommessage.CustomMessage;

@Component
public class MessagePublisher {
    @Autowired
    private static RabbitTemplate template;
    private static DirectExchange exchange;

    @Autowired
    public MessagePublisher(RabbitTemplate template, DirectExchange exchange) {
        MessagePublisher.template = template;
        MessagePublisher.exchange = exchange;
    }

    public static void sendMessageToRabbitMq(CustomMessage customMessage) {
        template.convertAndSend(exchange.getName(), "booking_routing", customMessage);
    }
}
