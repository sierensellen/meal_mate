import { IconProps } from './Icon.types';
import styles from './Icon.module.scss';
import React, { FC } from 'react'

const Icon: FC<IconProps> = ({ name }) => {
    return (
        <img src={`/assets/icons/${name}.svg`} alt={name} className={styles["c-icon"]} />
    )
}

export default Icon;