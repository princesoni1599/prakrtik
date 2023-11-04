package com.stackroute.customerservice.repository;

import com.stackroute.customerservice.entity.OrderDetail;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<OrderDetail, String> {

List<OrderDetail> findByCustomerEmailId(String customerEmailId);
    OrderDetail findAllByorderId(String customerEmailId);
    List<OrderDetail> findByOwnerEmailId(String ownerEmailId);

    OrderDetail findByorderId(String orderId);

//    List<OrderDetail> findByorderId(String orderId);


}
