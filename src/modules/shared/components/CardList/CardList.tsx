import React, { FC, MouseEvent } from 'react';

import { ParsedMeal, ShoppingListItem } from '@shared/types';

import { Button } from '../Button';
import Card from '../Card/Card';

import styles from './CardList.module.scss';
import { CardListProps } from './CardList.types';

import { useCreateShoppingListItem } from 'hooks/shopping-list/create-shopping-list-item';
import { useDeleteShoppingListItem } from 'hooks/shopping-list/delete-shopping-list-item';
import { useGetShoppingListItems } from 'hooks/shopping-list/get-shopping-list-items';

const CardList: FC<CardListProps> = ({ cards }) => {
	/**
	 * Hooks
	 */
	const { data: shoppingListItems, refetch: refetchShoppingListItems } =
		useGetShoppingListItems();
	const { mutateAsync: createListItem } = useCreateShoppingListItem();
	const { mutateAsync: deleteListItem } = useDeleteShoppingListItem();

	/**
	 * Callbacks
	 */

	const onButtonClick = async (e: MouseEvent, card: ParsedMeal) => {
		e.preventDefault(); // Stop event bubbling
		try {
			await createListItem(card.id);
			refetchShoppingListItems();
		} catch (err) {
			console.error(err);
		}
	};

	const onDeleteClick = async (e: MouseEvent, item: ShoppingListItem) => {
		e.preventDefault(); // Stop event bubbling
		try {
			await deleteListItem(item._id);
			refetchShoppingListItems();
		} catch (err) {
			console.error(err);
		}
	};

	/**
	 * Render
	 */

	return (
		<div className={styles['c-card-list']}>
			{cards.map((card, index) => {
				const shoppingListItem = shoppingListItems?.find(
					(item) => item.mealId === card.meal.id
				);
				return (
					<Card
						{...card}
						className={styles['c-card-list__card']}
						key={`card-${index}`}
						button={
							<>
								<Button onClick={(e) => onButtonClick(e, card.meal)}>
									Op het lijstje {shoppingListItem ? '(x)' : ''}
								</Button>
								<Button onClick={(e) => onDeleteClick(e, shoppingListItem)}>
									Remove
								</Button>
							</>
						}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
