const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

const productSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
		},
		stock: {
			type: Number,
			required: true,
		},
		sold: {
			type: Number,
		},
		photo: {
			data: Buffer,
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

(module.exports = mongoose), model("Product", productSchema);
