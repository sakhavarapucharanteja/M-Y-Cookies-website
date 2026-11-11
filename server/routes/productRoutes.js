
const express = require("express");
const multer = require("multer");

const Product = require("../models/Product");
const protectAdmin = require("../middleware/authMiddleware");
const { storage } = require("../config/cloudinary");

const router = express.Router();

// Cloudinary upload configuration
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Please upload an image file"));
    }
  },
});

// PUBLIC: Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: error.message });
  }
});

// PUBLIC: Get one product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: error.message });
  }
});

// ADMIN ONLY: Add product
router.post(
  "/",
  protectAdmin,
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        name,
        description,
        price,
        prices,
        stock,
        category,
        featured,
      } = req.body;

      let parsedPrices = [];

      if (prices) {
        try {
          parsedPrices = JSON.parse(prices);
        } catch {
          return res.status(400).json({
            message: "Invalid weight pricing format",
          });
        }
      }

      if (!Array.isArray(parsedPrices)) {
        return res.status(400).json({
          message: "Prices must be an array",
        });
      }

      if (!name || !description || price === undefined || !category) {
        return res.status(400).json({
          message: "Name, description, price and category are required",
        });
      }

      const image = req.file ? req.file.path : "";

      const product = new Product({
        name,
        description,
        price: Number(price),
        prices: parsedPrices,
        stock: Number(stock || 0),
        category,
        image,
        featured: featured === "true",
      });

      const savedProduct = await product.save();

      res.status(201).json(savedProduct);
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(400).json({ message: error.message });
    }
  }
);

// ADMIN ONLY: Update product
router.put(
  "/:id",
  protectAdmin,
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        name,
        description,
        price,
        prices,
        stock,
        category,
        featured,
      } = req.body;

      const updateData = {};

      if (name !== undefined) updateData.name = name;
      if (description !== undefined) updateData.description = description;
      if (price !== undefined) updateData.price = Number(price);
      if (stock !== undefined) updateData.stock = Number(stock);
      if (category !== undefined) updateData.category = category;

      if (featured !== undefined) {
        updateData.featured = featured === "true";
      }

      if (prices !== undefined) {
        try {
          const parsedPrices = JSON.parse(prices);

          if (!Array.isArray(parsedPrices)) {
            return res.status(400).json({
              message: "Prices must be an array",
            });
          }

          updateData.prices = parsedPrices;
        } catch {
          return res.status(400).json({
            message: "Invalid weight pricing format",
          });
        }
      }

      // Save Cloudinary URL when a new image is uploaded
      if (req.file) {
        updateData.image = req.file.path;
      } else if (req.body.existingImage !== undefined) {
        updateData.image = req.body.existingImage;
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        updateData,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedProduct) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      res.json(updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(400).json({
        message: error.message,
      });
    }
  }
);

// ADMIN ONLY: Delete product
router.delete("/:id", protectAdmin, async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
