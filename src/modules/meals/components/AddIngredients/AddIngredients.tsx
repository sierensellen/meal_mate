import React, { FC, useEffect, useState } from 'react';

import { Button, Input } from '@shared/components';

import styles from './AddIngredients.module.scss';
import { AddIngredientsProps } from './AddIngredients.types';

import { AddIngredientsForm } from '@ingredients/AddIngredientsForm';
import { useGetIngredients } from 'hooks/get-ingredients';

const AddIngredients: FC<AddIngredientsProps> = ({
	checkedIngredients,
	className,
	onSubmit,
	isOpened,
}) => {
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

	useEffect(() => {
		console.log('useffect');
		isOpened && setIngredientsState(checkedIngredients);
	}, [checkedIngredients, isOpened]);

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
								checked={
									ingredientsState &&
									ingredientsState.find((element) => {
										return element._id === ingredient._id;
									})
										? true
										: false
								}
								label={ingredient.name}
								checkbox={true}
								className={styles['c-add-ingredients__ingredient']}
								onChange={() => {
									if (ingredientsState) {
										const filtered = ingredientsState.filter((item) => {
											return item._id !== ingredient._id;
										});

										const isEqualLength =
											filtered.length === ingredientsState.length;
										setIngredientsState(
											isEqualLength ? [...filtered, ingredient] : filtered
										);
									} else {
										setIngredientsState([ingredient]);
									}
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
