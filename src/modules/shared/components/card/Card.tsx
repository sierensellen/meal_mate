import clsx from 'clsx';
import Image from 'next/image';
import React, { FC } from 'react';

import { Illustration } from '@shared/components/Illustration';

import Icon from '../Icon/Icon';
import Tag from '../Tag/Tag';

import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = ({
	color,
	bgColor,
	rotation,
	scale,
	posX,
	posY,
	title,
	tags,
	icons,
	className,
}) => {
	return (
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
					{tags.map((tag, index) => {
						return <Tag key={`tag-${index}`} {...tag} />;
					})}
				</div>
				<div className={styles['c-card__icons']}>
					{icons.map((icon, index) => (
						<Icon {...icon} className={styles['c-card__icon']} key={`icon-${index}`} />
					))}
				</div>
			</div>
		</article>
	);
};

export default Card;
