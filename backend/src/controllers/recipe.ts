import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const MEAL_URL = process.env.THE_MEAL_API;

export const getRecipe = async (req: any, res: any) => {
  const { ingredients, country, category } = req.query;
  try {
    let url = `${MEAL_URL}/search.php?s=`;

    if (ingredients) {
      url = `${MEAL_URL}/filter.php?i=${ingredients}`;
    } else if (country) {
      url = `${MEAL_URL}/filter.php?a=${country}`;
    } else if (category) {
      url = `${MEAL_URL}/filter.php?c=${category}`;
    }

    const { data } = await axios.get(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recipes" });
  }
};

export const getRecipeById = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(`${MEAL_URL}/lookup.php?i=${id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recipe" });
  }
};
