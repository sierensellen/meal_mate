import React, { FC, useState } from 'react';

import { Button, Input } from '@shared/components';

import styles from './AddIngredients.module.scss';
import { AddIngredientsProps } from './AddIngredients.types';

import { AddIngredientsForm } from '@ingredients/AddIngredientsForm';
import { useGetIngredients } from 'hooks/get-ingredients';

const AddIngredients: FC<AddIngredientsProps> = ({ checkedIngredients, className, onSubmit }) => {
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
			<AddIngredientsForm className={styles['c-add-ingredients__form']} onCreate={onCreate} />
			<div className={styles['c-add-ingredients__form--list']}>
				{ingredients &&
					ingredients.map((ingredient, key) => {
						// console.log('checked', checkedIngredients);
						checkedIngredients &&
							console.log(
								'checked?',
								checkedIngredients.find((element) => {
									return element._id === ingredient._id;
								})
							);
						return (
							<Input
								key={key}
								type="checkbox"
								name={ingredient.name}
								// checked={
								// 	checkedIngredients &&
								// 	checkedIngredients.find((element) => {
								// 		return element._id === ingredient._id;
								// 	})
								// 		? true
								// 		: false
								// }
								label={ingredient.name}
								checkbox={true}
								className={styles['c-add-ingredients__ingredient']}
								onChange={() => {
									const found = ingredientsState.find((element) => {
										return element._id === ingredient._id;
									});
									if (found) {
										const foundIndex = ingredientsState.indexOf(found);
										// console.log('found index', foundIndex);
										ingredientsState.splice(foundIndex, 1);
									} else {
										ingredientsState.push(ingredient);
									}
									setIngredientsState(ingredientsState);
								}}
							/>
						);
					})}
			</div>
			<div className={styles['c-add-ingredients__button-wrapper']}>
				<Button
					className={styles['c-add-ingredients__button-wrapper--button']}
					onClick={() => onSubmit(ingredientsState)}
				>
					save ingredients
				</Button>
			</div>
		</div>
	);
};

export default AddIngredients;
