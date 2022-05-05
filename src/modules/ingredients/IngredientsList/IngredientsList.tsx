import React, { FC } from 'react';

import styles from './IngredientsList.module.scss';
import { IngredientsListProps } from './IngredientsList.types';

const IngredientsList: FC<IngredientsListProps> = ({ ingredients }) => {
	return (
		<div className={styles['c-ingredients-list']}>
			{ingredients.map((ingredient, index) => (
				<div className={styles['c-ingredients-list__ingredient']} key={index}>
					<p className={styles['c-ingredients-list__ingredient--name']}>
						{ingredient.name}
					</p>
					{ingredient.metric && (
						<p className={styles['c-ingredients-list__ingredient--metric']}>
							{ingredient.metric}
						</p>
					)}
					<p className={styles['c-ingredients-list__ingredient--amount']}>
						{ingredient.amount}
					</p>
				</div>
			))}
		</div>
	);
};

export default IngredientsList;
