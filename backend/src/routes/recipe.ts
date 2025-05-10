import express from "express";
import { getRecipe, getRecipeById } from "../controllers/recipe";

const router = express.Router();

router.get("/", getRecipe);
router.get("/:id", getRecipeById);

export default router;
