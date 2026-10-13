import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddFoodRecipe() {
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    time: "",
    coverImage: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/recipe", recipe);

      alert("Recipe added successfully!");
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to add recipe. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Add Your Food Recipe</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-control">
          <label htmlFor="title">Recipe Title</label>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Enter recipe title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            className="input-textarea"
            name="ingredients"
            placeholder="Enter ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            className="input-textarea"
            name="instructions"
            placeholder="Enter cooking instructions"
            value={recipe.instructions}
            onChange={handleChange}
            rows="6"
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="time">Cooking Time</label>
          <input
            className="input"
            type="text"
            name="time"
            placeholder="e.g. 30 minutes"
            value={recipe.time}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="coverImage">Cover Image URL</label>
          <input
            className="input"
            type="url"
            name="coverImage"
            placeholder="Paste an image URL"
            value={recipe.coverImage}
            onChange={handleChange}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Adding Recipe..." : "Add Recipe"}
        </button>
      </form>
    </div>
  );
}
