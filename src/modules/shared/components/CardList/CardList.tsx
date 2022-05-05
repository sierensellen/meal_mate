import React, { FC, MouseEvent } from 'react';

import { Button } from '../Button';
import Card from '../Card/Card';
import { CardProps } from '../Card/Card.types';

import styles from './CardList.module.scss';
import { CardListProps } from './CardList.types';

import { usePostCreateShoppingListItem } from 'hooks/post-create-shopping-list-item';

const CardList: FC<CardListProps> = ({ cards }) => {
	/**
	 * Hooks
	 */
	const { mutateAsync: createListItem } = usePostCreateShoppingListItem();

	/**
	 * Callbacks
	 */

	const onButtonClick = async (e: MouseEvent, card: CardProps) => {
		e.preventDefault(); // Stop event bubbling
		try {
			await createListItem(card.id);
		} catch (err) {
			console.error(err);
		}
	};

	/**
	 * Render
	 */

	return (
		<div className={styles['c-card-list']}>
			{cards.map((card, index) => (
				<Card
					{...card}
					className={styles['c-card-list__card']}
					key={`card-${index}`}
					button={<Button onClick={(e) => onButtonClick(e, card)}>Op het lijstje</Button>}
				/>
			))}
		</div>
	);
};

export default CardList;
