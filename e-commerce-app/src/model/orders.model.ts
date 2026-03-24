import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Product"
    },
    name:{
        type:String,
        required:true
    },
    quantiy:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

})

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    items:[itemSchema], //  array of items
    total:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
}
)

const Order = mongoose.model("Order",orderSchema)

export default Order