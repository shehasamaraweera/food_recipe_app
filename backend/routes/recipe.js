const express = require("express");
const { getRecipes, getRecipe, addRecipe, updateRecipe, deleteRecipe } = require("../controller/recipeController");
const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);
router.post("/", addRecipe);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);


module.exports = router;