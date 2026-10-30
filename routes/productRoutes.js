const express = require("express");
const router = express.Router();
const validateToken  = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/roleMiddleware")


const {createProduct,updateProduct,deleteProduct} = require("../controllers/productController");
router.post( "/createproduct",
    validateToken,
    authorize("admin"),
    createProduct
   )
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct)

module.exports = router;
