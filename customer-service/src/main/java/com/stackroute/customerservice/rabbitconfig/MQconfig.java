//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.stackroute.customerservice.rabbitconfig;

import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MQconfig {
    private String exchangeName = "booking_exchange";

    public MQconfig() {
    }

    @Bean
    public DirectExchange directExchange() {
        return new DirectExchange(this.exchangeName);
    }

    @Bean
    public Jackson2JsonMessageConverter producerJackson2MessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemp = new RabbitTemplate(connectionFactory);
        rabbitTemp.setMessageConverter(this.producerJackson2MessageConverter());
        return rabbitTemp;
    }
}
