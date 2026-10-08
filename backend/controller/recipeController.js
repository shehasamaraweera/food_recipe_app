const Recipe = require("../model/recipe");

const getRecipes = async(req, res) => {
  const recipes = await Recipe.find();
  return res.json(recipes);
};

const getRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  return res.json(recipe);
};

const addRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body || {};

  if(!title || !ingredients || !instructions) 
  {
   return res.json({ message: "Please fill all the fields" });
  }

  const newRecipe = await Recipe.create({
    title,
    ingredients,
    instructions,
    time
  });
  return res.json(newRecipe);
};

const updateRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, time } = req.body || {};

    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { title, ingredients, instructions, time },
      { new: true },
    );

    res.json(updatedRecipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteRecipe = (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports = { getRecipes, getRecipe, addRecipe, updateRecipe, deleteRecipe };