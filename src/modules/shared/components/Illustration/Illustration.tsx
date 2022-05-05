import React, { FC } from 'react';

import styles from './Illustration.module.scss';
import { IllustrationProps } from './Illustration.types';

const Illustration: FC<IllustrationProps> = ({
	bgColor,
	color,
	rotation,
	scale,
	positionX,
	positionY,
}) => {
	return (
		<div style={{ backgroundColor: bgColor }} className={styles['c-illustration']}>
			<div
				style={{
					transform: `translate(${positionX * 100}%, ${positionY * 100}%)`,
				}}
			>
				<div
					style={{
						transform: `rotate(${rotation * 360}deg) scale(${
							scale * 3
						}) translate(-50%)`,
						transformOrigin: 'center left',
						display: 'inline-block',
					}}
				>
					<svg
						id="shape"
						className={styles['c-illustration__svg']}
						width="224"
						height="149"
						viewBox="0 0 224 149"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill={color}
							d="M39.9249 10.7081L0.0220957 76.534L61.4657 123.605L138.677 148.838L214.871 142.053L223.564 69.2759L149.519 0.948333L39.9249 10.7081Z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Illustration;
