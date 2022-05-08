import clsx from 'clsx';
import React, { FC } from 'react';

import { Illustration } from '@shared/components/Illustration';

import Tag from '../Tag/Tag';

import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = ({
	meal: {
		color,
		bgColor,
		rotation,
		scale,
		posX,
		posY,
		title,
		tags,
		// icons,
		id,
	},
	className,
	button,
}) => {
	return (
		<a href={`/meals/${id}`}>
			<article className={clsx(className, styles['c-card'])}>
				<div className={styles['c-card__image']}>
					<Illustration
						color={color}
						bgColor={bgColor}
						rotation={rotation}
						scale={scale}
						positionX={posX}
						positionY={posY}
					/>
				</div>
				<div className={styles['c-card__content']}>
					<h3>{title}</h3>
					<div className={styles['c-card__tags']}>
						{tags?.map((tag, index) => {
							return <Tag key={`tag-${index}`} {...tag} />;
						})}
					</div>
					{/* <div className={styles['c-card__icons']}>
						{icons.map((icon, index) => (
							<Icon
								{...icon}
								className={styles['c-card__icon']}
								key={`icon-${index}`}
							/>
						))}
					</div> */}
				</div>
				{button && button}
			</article>
		</a>
	);
};

export default Card;
