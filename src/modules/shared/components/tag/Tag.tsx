import React, { FC } from 'react'

import { TagProps } from './Tag.types';
import styles from './Tag.module.scss';
import Icon from "../icon/Icon"

const Tag: FC<TagProps> = ({ label, iconName }) => {
    return (
        <span className={styles["c-tag"]}>
            <Icon name={iconName} small={true} />
            <p>{label}</p>
        </span>

    )
}

export default Tag;