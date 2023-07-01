import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { validateSchema } from "../middleware/validator.middeleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/task", authRequired, getTasks);
router.get("/task/:id", authRequired, getTask);
router.post(
  "/task",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
);
router.delete("/task/:id", authRequired, deleteTask);
router.put("/task/:id", authRequired, updateTask);

export default router;
