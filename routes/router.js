
// Importing Statements




const express =require ('express');
const router=express.Router();
const ContactModel=require('../model/model') 


// Post Contact


router.post('/Contact',async(req,res)=>{
   
   
    const  {name,email,phone,subject,detail}=req.body;
    const ABNData= new ContactModel({name:name,email:email,phone:phone,subject:subject,
        detail:detail});
   const Savedata= await ABNData.save();
    res.json("Your Data has been saved");

}
    );

                                    
module.exports=router