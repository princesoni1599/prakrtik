package com.stackroute.service;

import com.stackroute.plantmodel.PlantModel;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;


public interface PlantService {


    PlantModel addProduct(PlantModel plantModel , MultipartFile file)throws Exception;
    List<PlantModel> getAllProductModels();
    PlantModel getProduct(String productId) ;
    PlantModel deleteProduct(String productId);
    List<PlantModel> getProductName(String productName);
    List<PlantModel> getProductDetails(String ownerEmailId);
    PlantModel updateProduct(PlantModel plantModel , String productId);

}
