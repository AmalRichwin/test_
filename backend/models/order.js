const mongoose = require("mongoose");
const user = require("./user");
const { Schema, ObjectID } = mongoose;

const productCartSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: string,
	},
});

const orderSchema = new Schema(
	{
		product: [productCartSchema],
		address: {
			type: String,
		},
		user: {
			type: ObjectID,
			ref: user,
		},
		transactionId: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);
const ProductCart = mongoose.model("ProductCartSchema", ProductCartSchema);
