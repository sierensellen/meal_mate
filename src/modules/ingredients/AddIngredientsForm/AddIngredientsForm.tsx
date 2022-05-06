import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Icon, Icons, Input, Select } from '@shared/components';

import { ADD_INGREDIENT_FORM_SCHEMA } from './AddIngredientsForm.const';
import styles from './AddIngredientsForm.module.scss';
import { AddIngredientFormState, AddIngredientsFormProps } from './AddIngredientsForm.types';

import { Category } from '@ingredients/types';
import { usePostIngredient } from 'hooks/post-ingredient';

const AddIngredientsForm: FC<AddIngredientsFormProps> = ({ className, onCreate }) => {
	/**
	 * Form
	 */
	const {
		control,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<AddIngredientFormState>({
		resolver: yupResolver(ADD_INGREDIENT_FORM_SCHEMA()),
		defaultValues: {
			metric: '',
			name: '',
			category: '',
		},
	});

	/**
	 * Data
	 */
	const { mutateAsync: postIngredient } = usePostIngredient();

	return (
		<div className={className}>
			<form>
				<Controller
					name="name"
					control={control}
					render={({ field }) => (
						<Input
							{...field}
							placeholder="wortel"
							name="name"
							type="text"
							label="name"
						/>
					)}
				/>
				{errors.name && <p className={styles['c-form__error']}>{errors.name?.message}</p>}
				<Controller
					name="metric"
					control={control}
					render={({ field }) => (
						<Input
							{...field}
							placeholder="zak"
							name="metric"
							type="text"
							label="Eenheid"
						/>
					)}
				/>
				<Controller
					name="category"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							name={'washing'}
							icon={<Icon name={Icons.Vriezer} />}
							options={[
								{ value: Category.Zuivel, label: 'Zuivel' },
								{ value: Category.Vlees, label: 'Vlees' },
								{ value: Category.Groenten, label: 'Groenten' },
							]}
						/>
					)}
				/>
				<Button
					onClick={handleSubmit((state) => {
						postIngredient(state).then(() => onCreate?.());
					})}
				>
					add ingredient
				</Button>
			</form>
		</div>
	);
};

export default AddIngredientsForm;
