const express = require('express');
const cors = require("cors");
require("dotenv").config();
const app = express()
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Shopmart API is running')
})
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})