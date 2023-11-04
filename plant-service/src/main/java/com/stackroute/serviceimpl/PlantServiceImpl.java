package com.stackroute.serviceimpl;

import com.stackroute.exception.PlantAlreadyExistException;
import com.stackroute.plantmodel.PlantModel;
import com.stackroute.repository.PlantModelRepository;
import com.stackroute.service.PlantService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
import java.util.Optional;


@Service
public class PlantServiceImpl implements PlantService {


    @Autowired
    private PlantModelRepository repository;



    @Override
    public PlantModel addProduct(PlantModel plantModel, MultipartFile file) throws Exception {
        PlantModel addProduct = new PlantModel();
        Optional<PlantModel> optionalPlantModel = repository.findById(plantModel.getProductId());
        if (optionalPlantModel.isPresent()){
            throw new PlantAlreadyExistException("Entered Product is already Exist");
        }else {
            plantModel.setProductId("PRK"+generateString());
            plantModel.setProductImage(file.getBytes());
            addProduct =repository.save(plantModel);
            return addProduct ;
        }

    }

    // get all plant method
    @Override
    public List<PlantModel> getAllProductModels() {
        List<PlantModel> productModels = this.repository.findAll();
        return productModels;
    }

    @Override
    public PlantModel getProduct(String productId)  {
        PlantModel plantModel = repository.findByproductId(productId);
        return plantModel;
    }

    @Override
    public PlantModel deleteProduct(String productId) {
        return repository.deleteByproductId(productId);
    }

    @Override
    public List<PlantModel> getProductName(String productName) {
        List<PlantModel>plantModels = repository.findByproductName(productName);
        return  plantModels;
    }

    @Override
    public List<PlantModel> getProductDetails(String ownerEmailId) {
        List<PlantModel>plantModels = repository.findByownerEmailId(ownerEmailId);
        return plantModels;
    }

    @Override
    public PlantModel updateProduct(PlantModel plantModel, String productId) {
        PlantModel save = this.repository.findByproductId(productId);
        save.setOwnerEmailId(plantModel.getOwnerEmailId());
        save.setProductsAvailable(plantModel.getProductsAvailable());
        save.setProductName(plantModel.getProductName());
        //  save.setPlantImage(plantModel.getPlantImage());
        save.setProductAge(plantModel.getProductAge());
        save.setProductPrice(plantModel.getProductPrice());
        save.setProductAddress(plantModel.getProductAddress());
        save.setWaterRequirement(plantModel.getWaterRequirement());
        save.setSunlightRequirement(plantModel.getSunlightRequirement());
        save.setSizeOfProduct(plantModel.getSizeOfProduct());
        save.setToxicity(plantModel.getToxicity());
        save.setDescription(plantModel.getDescription());
        PlantModel updated =this.repository.save(save);
        return updated;

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
