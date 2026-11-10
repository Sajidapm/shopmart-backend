const express = require('express');
const cors = require("cors");
const app = express()
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require('./data/db.js')
connectDB()
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.get('/', (req, res) => {
  res.send('Shopmart API is running')
})
const port = process.env.PORT|| 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})