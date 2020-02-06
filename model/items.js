const mongoose = require('mongoose');

const schemaList = new mongoose.Schema(
    {
        text: {type: String, required: true,minlength:5},
        done: {type: String, required:true, minlength:2}
    }
) 
const Item = mongoose.model("Item", schemaList)

module.exports = Item;
