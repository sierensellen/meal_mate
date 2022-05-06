import React, { FC, useState } from 'react';

import { Button, Input } from '@shared/components';

import { AddIngredientsProps } from './AddIngredients.types';

import { AddIngredientsForm } from '@ingredients/AddIngredientsForm';
import { useGetIngredients } from 'hooks/get-ingredients';

const AddIngredients: FC<AddIngredientsProps> = ({ className, onSubmit }) => {
	const { data: ingredients, refetch } = useGetIngredients();

	const [ingredientsState, setIngredientsState] = useState<
		{
			_id: string;
			name: string;
			metric: string;
		}[]
	>([]);

	const onCreate = () => {
		refetch();
	};
	return (
		<div className={className}>
			<p>ingredientslijst</p>
			<AddIngredientsForm onCreate={onCreate} />
			{ingredients &&
				ingredients.map((ingredient, key) => {
					return (
						<Input
							key={key}
							type="checkbox"
							name={ingredient.name}
							label={ingredient.name}
							onChange={() => {
								const found = ingredientsState.find((element) => {
									return element._id === ingredient._id;
								});
								if (found) {
									const foundIndex = ingredientsState.indexOf(found);
									ingredientsState.splice(foundIndex, 1);
								} else {
									ingredientsState.push(ingredient);
								}
								setIngredientsState(ingredientsState);
							}}
						/>
					);
				})}
			<Button onClick={() => onSubmit(ingredientsState)}>save ingredients</Button>
		</div>
	);
};

export default AddIngredients;
