import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import {
	Button,
	CheckboxSlider,
	Icon,
	Icons,
	Illustration,
	Input,
	Select,
	Textarea,
} from '@shared/components';

import AddIngredients from '../AddIngredients/AddIngredients';

import { ADD_MEAL_FORM_SCHEMA } from './AddMealForm.const';
import styles from './AddMealForm.module.scss';
import { AddMealFormProps, AddMealFormState } from './AddMealForm.types';

import { Afwas } from '@meals/types';
import { usePostMeal } from 'hooks/post-meal';

const AddMealForm: FC<AddMealFormProps> = () => {
	/**
	 * Form
	 */
	const {
		control,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<AddMealFormState>({
		resolver: yupResolver(ADD_MEAL_FORM_SCHEMA()),
		defaultValues: {
			bgColor: '#005321',
			color: '#ff9029',
			rotation: 0.5,
			scale: 0.5,
			positionX: 0.5,
			positionY: 0.5,
			price: 0,
			time: 0,
			name: '',
			washing: 'VEEL',
			ingredientAmounts: [],
		},
	});

	const {
		bgColor,
		color,
		rotation,
		scale,
		positionX,
		positionY,
		ingredients,
		ingredientAmounts,
	} = watch();

	/**
	 * Data
	 */
	const { mutateAsync: postMeal } = usePostMeal();

	/**
	 * State
	 */
	const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

	/**
	 * Callbacks
	 */
	const onSubmitIngredients = (ingredients) => {
		const ingredientsWithAmount = ingredients.map((item) => ({
			...item,
			amount: 1,
		}));
		// console.log('amount', ingredientsWithAmount);
		setValue('ingredients', ingredientsWithAmount);
	};

	const findIngredient = (currentIngredient) => {
		return ingredientAmounts.find((element) => {
			return element.id === currentIngredient._id;
		});
	};

	const setIngredientsAmountValue = (currentIngredient, currentValue) => {
		const found = findIngredient(currentIngredient);
		if (found) {
			found.amount = currentValue;
		} else {
			ingredientAmounts.push({
				id: currentIngredient._id,
				amount: currentValue,
			});
		}
		// console.log('ingrdientamounts', ingredientAmounts);
		setValue('ingredientAmounts', ingredientAmounts);
	};

	/**
	 * Render
	 */
	return (
		<>
			<form
				className={styles['c-form']}
				action=""
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<div className={styles['c-form__image']}>
					<Illustration
						bgColor={bgColor}
						color={color}
						rotation={rotation}
						scale={scale}
						positionX={positionX}
						positionY={positionY}
					/>
					<Button
						onClick={() => {
							// console.log('clicked');
							setIsCollapsed(!isCollapsed);
						}}
						className={styles['c-form__image--button']}
					>
						{isCollapsed ? 'speel picasso' : 'meesterwerk volbracht'}
					</Button>
				</div>
				<fieldset
					className={clsx(
						styles['c-form__fieldset--image'],
						styles['c-form__fieldset'],
						isCollapsed && styles['c-form__fieldset--collapsed']
					)}
				>
					<Controller
						name="bgColor"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								name="bgColor"
								type={'color'}
								label="achtergrond"
								// value={bgColor}
							/>
						)}
					/>
					{errors.bgColor && (
						<p className={styles['c-form__error']}>{errors.bgColor?.message}</p>
					)}

					<Controller
						name="color"
						control={control}
						render={({ field }) => (
							<Input {...field} name="color" type={'color'} label="vorm" />
						)}
					/>
					{errors.color && (
						<p className={styles['c-form__error']}>{errors.color?.message}</p>
					)}

					<Controller
						name="rotation"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type="range"
								name="rotation"
								step=".01"
								label="rotatie"
								min={0}
								max={1}
							/>
						)}
					/>
					{errors.rotation && (
						<p className={styles['c-form__error']}>{errors.rotation?.message}</p>
					)}

					<Controller
						name="scale"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type="range"
								name="scale"
								step=".01"
								label="scale"
								min={0}
								max={1}
							/>
						)}
					/>
					{errors.scale && (
						<p className={styles['c-form__error']}>{errors.scale?.message}</p>
					)}

					<Controller
						name="positionX"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type="range"
								name="translateX"
								step=".01"
								label="X"
								min={0}
								max={1}
							/>
						)}
					/>
					{errors.positionX && (
						<p className={styles['c-form__error']}>{errors.positionX?.message}</p>
					)}

					<Controller
						name="positionY"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type="range"
								name="translateY"
								step=".01"
								label="Y"
								min={0}
								max={1}
							/>
						)}
					/>
					{errors.positionY && (
						<p className={styles['c-form__error']}>{errors.positionY?.message}</p>
					)}
				</fieldset>

				<fieldset
					className={clsx(styles['c-form__fieldset--name'], styles['c-form__fieldset'])}
				>
					<Controller
						name="name"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								name="name"
								type="text"
								big={true}
								label={'Naam van het gerecht'}
								placeholder={'Spaghetti'}
							/>
						)}
					/>
					{errors.name && (
						<p className={styles['c-form__error']}>{errors.name?.message}</p>
					)}
					<Controller
						name="method"
						control={control}
						render={({ field }) => (
							<Textarea
								{...field}
								name="method"
								label={'Bereidingswijze'}
								placeholder={'Beschrijf hier de stappen'}
							/>
						)}
					/>
					{errors.name && (
						<p className={styles['c-form__error']}>{errors.name?.message}</p>
					)}
				</fieldset>
				<fieldset
					className={clsx(styles['c-form__fieldset--inputs'], styles['c-form__fieldset'])}
				>
					<p>Dit recept kost </p>
					<div>
						<Controller
							name="price"
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									name={'price'}
									type={'number'}
									icon={<Icon name={Icons.Vriezer} />}
									placeholder={'0,00'}
									step=".01"
								/>
							)}
						/>
						{errors.price && (
							<p className={styles['c-form__error']}>{errors.color?.message}</p>
						)}
					</div>
					<p>en duurt</p>
					<div>
						<Controller
							name="time"
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									name={'time'}
									type={'number'}
									placeholder={'0'}
									icon={<Icon name={Icons.Vriezer} />}
								/>
							)}
						/>
						{errors.time && (
							<p className={styles['c-form__error']}>{errors.time?.message}</p>
						)}
					</div>
					<p>min om te maken maar dan moet je nog</p>
					<div>
						<Controller
							name="washing"
							control={control}
							render={({ field }) => (
								<Select
									{...field}
									name={'washing'}
									icon={<Icon name={Icons.Vriezer} />}
									options={[
										{ value: Afwas.Veel, label: 'Veel' },
										{ value: Afwas.Gemiddeld, label: 'Gemiddeld' },
										{ value: Afwas.Weinig, label: 'Weinig' },
									]}
								/>
							)}
						/>
						{errors.washing && (
							<p className={styles['c-form__error']}>{errors.washing?.message}</p>
						)}
					</div>
					<p>afwassen</p>
				</fieldset>
				<fieldset
					className={clsx(styles['c-form__fieldset--bools'], styles['c-form__fieldset'])}
				>
					<p>Werkt dit goed in de vriezer?</p>

					<Controller
						name="freezer"
						control={control}
						render={({ field }) => (
							<CheckboxSlider
								{...field}
								value="false"
								name="freezer"
								labelFalse="nee"
								labelTrue="ja"
								onChange={(e) => {
									e.currentTarget.value === 'true'
										? setValue('freezer', true)
										: setValue('freezer', false);
								}}
							/>
						)}
					/>
					{errors.freezer && (
						<p className={styles['c-form__error']}>{errors.freezer?.message}</p>
					)}
				</fieldset>
				<fieldset>
					{ingredients?.map((ingredient) => {
						return (
							<div key={ingredient._id}>
								<Controller
									name={ingredient.name}
									control={control}
									render={({ field }) => {
										const foundIngredient = findIngredient(ingredient);
										return (
											<Input
												{...field}
												name={ingredient.name}
												type="number"
												step={0.1}
												icon={<Icon name={Icons.Vriezer} />}
												onChange={(e) => {
													setIngredientsAmountValue(
														ingredient,
														e.currentTarget.value
													);
												}}
												value={
													foundIngredient ? foundIngredient.amount : ''
												}
											/>
										);
									}}
								/>
								<p>{ingredient.metric}</p>
								<p>{ingredient.name}</p>
							</div>
						);
					})}
				</fieldset>
				<fieldset
					className={clsx(styles['c-form__fieldset--submit'], styles['c-form__fieldset'])}
				>
					<Input
						onClick={handleSubmit((state) => {
							console.log('success');
							console.log(state);
							const mappedIngredients = ingredients.map((ingredient) => {
								const found = findIngredient(ingredient);
								console.log('found', found);
								ingredient.amount = found.amount;
								return ingredient;
							});
							const mappedMeal = {
								bgColor: state.bgColor,
								color: state.color,
								freezer: state.freezer,
								name: state.name,
								positionX: state.positionX,
								positionY: state.positionY,
								price: state.price,
								rotation: state.rotation,
								scale: state.scale,
								time: state.time,
								washing: state.washing,
								ingredients: mappedIngredients,
								method: state.method,
							};
							console.log('state dat naar db gestuurd wrodt', mappedMeal);
							postMeal(mappedMeal);
						})}
						name={'submit'}
						value={'save'}
						type="submit"
					/>
				</fieldset>
			</form>
			<AddIngredients className={styles['ingredientList']} onSubmit={onSubmitIngredients} />
		</>
	);
};

export default AddMealForm;
