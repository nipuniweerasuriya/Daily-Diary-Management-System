import express from "express";
import {
  createDiary,
  getDiaries,
  updateDiary,
  deleteDiary,
} from "../controllers/diaryController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/")
  .get(protect, getDiaries)
  .post(protect, createDiary);

router.route("/:id")
  .put(protect, updateDiary)
  .delete(protect, deleteDiary);

export default router;
