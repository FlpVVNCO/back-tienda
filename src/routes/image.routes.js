import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import { createImage, getImage } from "../controllers/image.controller.js";
import { upload } from "../libs/multer.js";

const router = Router();

router.post('/upload' ,upload.single('image'), createImage)
router.get("/upload", getImage);


export default router