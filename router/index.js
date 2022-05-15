import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductsId,
  updateProduct,
  deleteProduct,
} from "../controller/Product.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductsId);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
