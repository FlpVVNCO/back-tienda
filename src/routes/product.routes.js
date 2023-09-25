import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import {
  getProducts,
  getAllProducts,
  getProductsByGenre,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { validateSchema } from "../middleware/validator.middeleware.js";
import { createProductSchema } from "../schemas/product.schema.js";
import { upload } from "../libs/multer.js";

const router = Router();


router.get("/product", authRequired, getProducts);
router.get("/products", getAllProducts);
router.get("/product/:id", authRequired, getProduct);
// router.get("/product/genre/:genre", authRequired, getProductsByGenre);
router.get("/productos", authRequired, getProductsByGenre);
router.post(
  "/product",
  authRequired,
  upload.single("image"),
  validateSchema(createProductSchema),
  createProduct
);

router.delete("/product/:id", authRequired, deleteProduct);
router.put("/product/:id", authRequired, updateProduct);

export default router;
