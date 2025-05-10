"use client";
import React from "react";
import { Recipe } from "../recipes/page";
import { useRouter } from "next/navigation";

export default function RecipeCard(recipe: Recipe) {
  const router = useRouter();
  return (
    <div
      className="flex flex-col w-full h-[460px] max-w-sm p-2 bg-gray-100 shadow-md rounded-lg cursor-pointer hover:bg-gray-200"
      onClick={() => router.push(`/recipes/${recipe.idMeal}`)}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full  object-cover rounded-t-lg"
      />
      <h3 className="p-2 text-lg font-semibold">{recipe.strMeal}</h3>
    </div>
  );
}
