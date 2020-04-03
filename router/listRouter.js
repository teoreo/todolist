const express = require('express');
const router = express.Router();
const Item = require("../model/items");


router.get("/createitem", (req,res)=> {
    res.render("todo")
  })
  router.post("/createitem", async (req,res)=>{
const addItem = new Item({
    text: req.body.text,
    done: req.body.done
})
await addItem.save((error,success)=>{
    if (error){
        console.log("It seems to be a problem..")
      error? res.send(error.message): res.redirect("/todo")
    }
    else
    res.redirect("/todo") // skickar tillbaka om det inte är error
})
  });
  //renderar till ejs
  router.get("/todo", async (req, res) => {
    const todoItem = 5;
    const page = req.query.page;
    const date = req.query.sort;
    const letter = req.query.text
    const items = await Item
    .find()
    .sort({done:date})
    .sort({text:letter})
    .skip(page-1)* todoItem
    //.limit()
  res.render("todo",{items});
  })

  router.get("/delete/:id", async (req,res)=> {
    console.log(req.params.id);
    await Item.deleteOne({_id:req.params.id}) // hej databas, gå till den här Comment och radera * objektet måste ha en nyckel - _id:
    //res.send("It works")
    res.redirect("/todo")
  })
  
  // varför ej post req  för delete - för att vi bara raderar och inte uppdaterar 
  
  router.get("/update/:id", async (req,res)=>{
    //hämta spec data från databas/ en quary till databasen
    const response = await Item.findById({_id:req.params.id});
    console.log(response);
    res.render("edit", {response})
  });
  
  router.post("/update/:id", async(req,res)=>{
  
    //updateOne metod för att kunna redigera 
    await Item.updateOne({_id:req.body._id},
       {$set: {text: req.body.text, done:req.body.done}},
    {runValidators:true}, (error)=> error? res.send(error.message): res.redirect("/todo") 
    
    ) // set = gå till databasen, ta klientens värde, updatera 
  
    console.log(req.body);
    res.redirect("/todo");
  });

  module.exports = router;
