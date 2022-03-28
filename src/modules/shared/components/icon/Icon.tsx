import React, { FC } from 'react';

import styles from './Icon.module.scss';
import { IconProps } from './Icon.types';

const Icon: FC<IconProps> = ({ name }) => {
	return <img src={`/assets/icons/${name}.svg`} alt={name} className={styles['c-icon']} />;
};

export default Icon;
