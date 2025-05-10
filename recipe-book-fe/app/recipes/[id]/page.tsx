'use client';
import React, { useEffect } from 'react';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Recipe } from '@/app/recipes/page';
import toast from 'react-hot-toast';
import { getRecipeById, getRecipes } from '@/services/recipes';

export default function RecipeInfoPage() {
  const { id } = useParams();

  const [recipe, setRecipe] = React.useState<Recipe>({} as Recipe);
  const [recipesByCategory, setRecipesByCategory] = React.useState<Recipe[]>(
    []
  );

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipeById(id as string);
        setRecipe(response.meals[0]);
      } catch (error: any) {
        toast.error(error.message);
      }
    };
    const fetchRecipesByCategory = async () => {
      try {
        const response = await getRecipes({
          category: recipe.strCategory,
        });
        setRecipesByCategory(response.meals);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchRecipe();
    fetchRecipesByCategory();
  }, []);

  return (
    <div className="container flex flex-col gap-10 md:flex-row">
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <Link href="/recipes">
          <p className="flex items-center justify-center w-full h-10 bg-blue-500 text-white text-2xl rounded-md shadow-md">
            Back to Recipes
          </p>
        </Link>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full object-cover rounded-lg shadow-md"
        />
        <h2 className="text-3xl text-center font-bold">{recipe.strMeal}</h2>
        <Link href={`/recipes?country=${recipe.strArea}`}>
          <p className="text-center text-lg text-blue-500 underline">
            {recipe.strArea}
          </p>
        </Link>
        <p className="text-center text-lg">{recipe.strInstructions}</p>
        <h3 className="text-2xl text-center font-bold">Ingredients</h3>
        <ul className="list-disc pl-5">
          {Array.from(
            { length: 20 },
            (_, i) => recipe[`strIngredient${i + 1}` as keyof Recipe]
          ).map(
            (ingredient, index) =>
              ingredient && (
                <li key={index}>
                  <Link href={`/recipes?ingredient=${ingredient}`}>
                    <span className="text-blue-500 underline">
                      {ingredient}
                    </span>
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <Link href={`/recipes?category=${recipe.strCategory}`}>
          <h3 className="text-2xl text-center ">
            Recipes in{' '}
            <span className="font-bold text-blue-500 underline">
              {recipe.strCategory}
            </span>
          </h3>
        </Link>
        <ul className="list-disc pl-5">
          {recipesByCategory.map((recipe) => (
            <li key={recipe.idMeal}>
              <Link href={`/recipes/${recipe.idMeal}`}>
                <span className="text-orange-500 underline">
                  {recipe.strMeal}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
