// controllers/productController.js
const Product = require('../models/Product');
const path = require('path');
const fs=require('fs');
const rootDir=require('../util/path');

exports.getAddProduct = (req, res) => {
  res.sendFile(path.join(rootDir,'view','form.html'));

};

exports.addinfo= async(req, res) => {
  try{
    const { Name,DOB,PhotoUrl,BirthPlace,Career,NoOfMatches} = req.body;

   const data=await Product.create({
    Name:Name,
    DOB:DOB,
    PhotoUrl:PhotoUrl,
    BirthPlace:BirthPlace,
    Career:Career,
    NoOfMatches:NoOfMatches,
  })
       
      res.status(201).json({playerinfo:data});
      
  }catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while saving appointments.');
  }
   
};

exports.getrecord = async (req, res) => {
  try {
    const records = await Product.findAll();
   res.status(200).json({alluser:records});
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching appointments.');
  }
};

exports.searchdata=async(req,res)=>{
  try{
    const uId=req.params.id;
   // console.log(await Product.findByPk(uId));
   const sdata= await Product.findByPk(uId);
   
   res.status(200).json({ userdetails: sdata });
  }catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting appointments.');
  }
};
