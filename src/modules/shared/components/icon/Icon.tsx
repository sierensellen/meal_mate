import { IconProps } from './Icon.types';
import styles from './Icon.module.scss';
import React, { FC } from 'react'
import clsx from 'clsx';

const Icon: FC<IconProps> = ({ name, small = false }) => {
    return (
        <span className={clsx(styles["c-icon"], small && styles["c-icon_small"])}>
            <img src={`/assets/icons/${name}.svg`} alt={name} />
        </span>
    )
}

export default Icon;