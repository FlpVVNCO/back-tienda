import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import {
  getProducts,
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { validateSchema } from "../middleware/validator.middeleware.js";
import { createProductSchema } from "../schemas/product.schema.js";

const router = Router();

router.get("/product", authRequired, getProducts);
router.get("/products", authRequired, getAllProducts);
router.get("/product/:id", authRequired, getProduct);
router.post(
  "/product",
  authRequired,
  validateSchema(createProductSchema),
  createProduct
);
router.delete("/product/:id", authRequired, deleteProduct);
router.put("/product/:id", authRequired, updateProduct);

export default router;
