package com.stackroute.customerservice.controller;


import com.stackroute.customerservice.entity.OrderDetail;

import com.stackroute.customerservice.service.OrderDetailService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
//@CrossOrigin(origins={"http://localhost:4200", "http://localhost:8084"})
public class OrderDetailsController {

    @Autowired
   // private MessagePublisher publisher;
    private OrderDetailService orderDetailService;

    public OrderDetailsController(OrderDetailService orderDetailService){
        this.orderDetailService=orderDetailService;
    }

    @PostMapping("/bookorder")
    public ResponseEntity<OrderDetail> bookOrder(@RequestBody OrderDetail orderDetail) {
        OrderDetail orderDetail1 = orderDetailService.BookProduct(orderDetail);
        return new ResponseEntity<>(orderDetail1,HttpStatus.OK);
    }


    @GetMapping("/customerBookingDetails/{customerEmailId}")
    public ResponseEntity<List<OrderDetail>> customerBookingDetails(@PathVariable String customerEmailId) {

        return new ResponseEntity<List<OrderDetail>>(orderDetailService.getCustomerBookingDetails(customerEmailId), HttpStatus.OK);

    }

    @GetMapping("ownerProductDetail/{ownerEmailId}")
    public ResponseEntity<List<OrderDetail>> ownerProductDetail(@PathVariable String ownerEmailId) {
        return new ResponseEntity<List<OrderDetail>>(orderDetailService.getOwnerProductDetails(ownerEmailId), HttpStatus.OK);
    }


    @GetMapping("/listofAllBookings")
    public ResponseEntity<List<OrderDetail>> getAll(){
        return new ResponseEntity<List<OrderDetail>>(orderDetailService.getAllBookingDetails(), HttpStatus.OK);
    }

//   @PutMapping("/CancelOrder/{orderId}")
//  public ResponseEntity<OrderDetail> cancelOrder(@PathVariable("orderId") String orderId,@RequestBody OrderDetail orderDetail) throws Exception{
//
//
//
//       return new ResponseEntity<OrderDetail>(orderDetailService.cancelOrder(orderId,orderDetail.getOrderStatus()),HttpStatus.OK);
//   }

    @PutMapping("/CancelOrder/{orderId}")
    public ResponseEntity<OrderDetail> cancelOrder(@PathVariable String orderId) throws Exception{

        OrderDetail orderDetail = orderDetailService.cancelOrder(orderId);

        return new ResponseEntity<>(orderDetail, HttpStatus.OK);

    }

    @GetMapping("/getOrder/{orderId}")
    public ResponseEntity<OrderDetail>getOrderDetail(@PathVariable("orderId") String orderId){
        OrderDetail getOrder = this.orderDetailService.getOrderDetails(orderId);
        return   new ResponseEntity<>(orderDetailService.getOrderDetails(orderId),HttpStatus.OK);

    }
//    @GetMapping("/customerBookingDetails/{orderId}")
//    public ResponseEntity<List<OrderDetail>> customerBookingDetails(@PathVariable String customerEmailId) {
//
//        return new ResponseEntity<List<OrderDetail>>(orderDetailService.getCustomerBookingDetails(customerEmailId), HttpStatus.OK);
//
//    }


}