const Petshop = require('../models/petshop');
const Product = require ('../models/product');
const petshops = require ('./petfood.json')
require('../database')
const createRecipients = require('../services/pagarme').createRecipient
const addPetshopAndProducts = async () =>{
    try{

        for (let petshop of petshops){
            
          
            const newPetshop = await new Petshop(petshop).save();
            await Product.insertMany(
                petshop.produtos.map((p)=>({...p,petshop_id:newPetshop._id}))
            )
           
            // const recipient = await createRecipients(petshop.nome);

            // if(!recipient.error) {
            //  const newPetshop = await new Petshop({
            //     ...petshop,
            //    recipient_id: recipient.data.id,
            //  }).save();
            // await Product.insertMany(
            //     petshop.produtos.map((p)=>({...p, petshop_id: newPetshop._id}))
            // )

        }
        console.log("final do script");
        // else {
        //     console.log(recipient.message);
        // }
    } catch(err){
        console.log(err.message);
    }

}

    

addPetshopAndProducts ();