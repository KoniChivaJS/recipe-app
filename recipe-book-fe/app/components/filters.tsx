'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const ingredients = [
  'Bread',
  'Olive Oil',
  'Garlic',
  'Pork',
  'Sushi Rice',
  'Rice wine',
  'Mayonnaise',
  'Lentils',
  'Onion',
  'Carrots',
  'Mint',
  'Thyme',
  'Black Pepper',
  'Water',
];
const countries = [
  'Spanish',
  'Japanese',
  'Croatian',
  'Turkish',
  'Egyptian',
  'Filipino',
  'Chinese',
  'Tunisian',
  'American',
  'Italian',
  'Canadian',
  'Indian',
  'Dutch',
  'Greek',
  'British',
];
const categories = [
  'Miscellaneous',
  'Seafood',
  'Side',
  'Vegetarian',
  'Beef',
  'Pork',
  'Pasta',
  'Dessert',
  'Lamb',
  'Chicken',
];

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = React.useState({
    ingredient: '',
    country: '',
    category: '',
  });

  useEffect(() => {
    const { ingredient, country, category } = filters;
    if (ingredient == '' && country == '' && category == '') {
      router.push(`/recipes`);
      console.log('ASd');
    } else if (ingredient) {
      router.push(`/recipes?ingredient=${ingredient}`);
    } else if (country) {
      router.push(`/recipes?country=${country}`);
    } else if (category) {
      router.push(`/recipes?category=${category}`);
    }
  }, [filters]);

  useEffect(() => {
    setFilters({
      ingredient: searchParams.get('ingredient') || '',
      country: searchParams.get('country') || '',
      category: searchParams.get('category') || '',
    });
  }, [searchParams]);

  const handleFilterChange = (type: string, value: string) => {
    setFilters({
      ingredient: '',
      country: '',
      category: '',
      [type]: value,
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-5 w-full">
      <div className="flex flex-col gap-4 p-4 border-2 border-gray-300 rounded-md md:w-1/2 lg:flex-row lg:w-full lg:justify-center">
        {[
          { label: 'ingredient', options: ingredients },
          { label: 'country', options: countries },
          { label: 'category', options: categories },
        ].map((filter) => (
          <div key={filter.label} className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              Filter by {filter.label}:
              <select
                className="p-2 border-2 border-gray-300 rounded-md"
                value={filters[filter.label as keyof typeof filters]}
                onChange={(e) =>
                  handleFilterChange(
                    filter.label as keyof typeof filters,
                    e.target.value
                  )
                }
              >
                <option value="">All</option>
                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
      </div>
      <h2 className="text-3xl">
        Filter:{' '}
        {filters.ingredient || filters.country || filters.category || 'All'}
      </h2>
    </div>
  );
}
