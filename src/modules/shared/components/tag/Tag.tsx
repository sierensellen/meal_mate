import React, { FC } from 'react';

import Icon from '../Icon/Icon';

import styles from './Tag.module.scss';
import { TagProps } from './Tag.types';

const Tag: FC<TagProps> = ({ label, iconName }) => {
	return (
		<span className={styles['c-tag']}>
			<Icon name={iconName} small={true} />
			<p className={styles['c-tag_label']}>{label}</p>
		</span>
	);
};

export default Tag;
