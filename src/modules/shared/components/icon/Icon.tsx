import clsx from 'clsx';
import Image from 'next/image';
import React, { FC } from 'react';

import styles from './Icon.module.scss';
import { IconProps } from './Icon.types';

const Icon: FC<IconProps> = ({ name, small = false, className }) => {
	return (
		<div className={className}>
			<span className={clsx(styles['c-icon'], small && styles['c-icon_small'])}>
				<Image
					src={`/assets/icons/${name}.svg`}
					alt={name}
					layout="fill"
					objectFit="contain"
				/>
			</span>
		</div>
	);
};

export default Icon;
