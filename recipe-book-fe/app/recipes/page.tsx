'use client';
import { getRecipes } from '@/services/recipes';
import React from 'react';
import toast from 'react-hot-toast';
import RecipeCard from '../components/recipe-card';
import Filters from '../components/filters';
import Loader from '../components/loader';
import Link from 'next/link';

import { useSearchParams } from 'next/navigation';

export type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
};

export default function RecipePage() {
  const searchParams = useSearchParams();

  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchRecipes = async (paramsOptions?: any) => {
    setLoading(true);
    try {
      const response = await getRecipes(paramsOptions);
      setRecipes(response.meals);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const ingredient = searchParams.get('ingredient');
    const country = searchParams.get('country');
    const category = searchParams.get('category');

    fetchRecipes({
      ingredients: ingredient,
      country: country,
      category: category,
    });
  }, [searchParams]);

  return (
    <div className="container flex flex-col items-center">
      <h2 className="text-3xl mb-5">All Recipes</h2>
      <div className="w-full">
        <Filters />
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {loading ? (
          <Loader />
        ) : (
          recipes.map((recipe: Recipe) => (
            <Link href={`/recipes/${recipe.idMeal}`} key={recipe.idMeal}>
              <RecipeCard {...recipe} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
