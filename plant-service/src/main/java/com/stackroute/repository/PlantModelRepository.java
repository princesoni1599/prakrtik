package com.stackroute.repository;

import com.stackroute.plantmodel.PlantModel;

import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface PlantModelRepository extends MongoRepository <PlantModel,String> {

    PlantModel findByproductId(String productId);
    PlantModel deleteByproductId(String productId);
    List< PlantModel> findByproductName(String productName);
    List<PlantModel> findByownerEmailId(String ownerEmailId);
    Optional<PlantModel> findById(String productId);
}