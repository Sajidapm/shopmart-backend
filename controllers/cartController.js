
const Cart = require("../models/cart");
const Product = require("../models/product");

// Add product to cart
const addToCart = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.id;
        const product = await Product.findById(productId);
        let cart = await Cart.findOne({ user: userId });

        }
