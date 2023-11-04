package com.stackroute.controller;

import com.google.gson.Gson;
import com.stackroute.plantmodel.PlantModel;
import com.stackroute.service.PlantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;


@RestController
@RequestMapping("/api/v1")
//@CrossOrigin(origins={"http://localhost:4200", "http://localhost:8084"})
//@CrossOrigin("/*")
public class PlantModelController {

    @Autowired
    private PlantService plantService;
    private ResponseEntity<PlantModel> responseEntity;
    public PlantModelController(PlantService plantService){
        this.plantService=plantService;
    }


    // for add-plant
    @PostMapping( value = "/addproduct")
    public ResponseEntity<PlantModel> addProduct(@RequestParam(value = "plantModel") String plantModel, @RequestParam(value = "file") MultipartFile file) throws Exception {
        Gson gson = new Gson();
        PlantModel plantModelFile = gson.fromJson(plantModel,PlantModel.class);
        PlantModel addedProduct = plantService.addProduct(plantModelFile,file);
        responseEntity=new ResponseEntity<>(addedProduct,HttpStatus.CREATED);
        return responseEntity;
        //return new ResponseEntity<>(plantService.addPlant(plantModel), HttpStatus.CREATED);
    }

    // for getallPlant
    @GetMapping("/listofAllProduct")
    public ResponseEntity<List<PlantModel>> getAll(){
        return new ResponseEntity<>(plantService.getAllProductModels(), HttpStatus.OK);
    }
    //get Plant by id
    @GetMapping("/get/{productId}")
    public ResponseEntity<?>getProduct(@PathVariable("productId") String productId){
        return   new ResponseEntity<>(plantService.getProduct(productId),HttpStatus.OK);

    }

    //delete plantdetails by id
    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable("productId") String productId ){
        this.plantService.deleteProduct(productId);
        return ResponseEntity.ok("Product Details deleted successfully of Id Number :" +productId);
    }
    //get all plantName by plantName
    @GetMapping("/getProductName/{productName}")

    public ResponseEntity<List<PlantModel>> getProductName(@PathVariable("productName") String productName){
        return new ResponseEntity<>(plantService.getProductName(productName),HttpStatus.OK);

    }
    //update by plantId
    @PutMapping("update/{productId}")
    public ResponseEntity<?> updateProduct(@RequestBody PlantModel plantModel, @PathVariable String productId){
        PlantModel updated = this.plantService.updateProduct(plantModel, productId);
        return ResponseEntity.ok(updated);
    }

    @GetMapping("/ProductList/{ownerEmailId}")
    public ResponseEntity<List<PlantModel>> getProductDetails(@PathVariable("ownerEmailId") String ownerEmailId){
        return new ResponseEntity<>(plantService.getProductDetails(ownerEmailId),HttpStatus.OK);
    }

}



