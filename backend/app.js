require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

mongoose
	.connect(DATABASE, {
		useCreateIndex: true,
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: true,
	})
	.then(() => {
		console.log("DB CONNECTED");
	})
	.catch(() => {
		console.log("Unable to connect to DB");
	});

// middlewares
app.use(bodyParser);
app.use(cookieParser);
app.use(cors);

// routes
app.use("/api");

// port
const port = 8282;

// listen
app.listen(port, () => {
	console.log(`Connected ${port}`);
});
