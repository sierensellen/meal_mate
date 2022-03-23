import { TagProps } from './Tag.types';
import styles from './Tag.module.scss';
import React, { FC } from 'react'
import Icon from "../icon/Icon"

const Tag: FC<TagProps> = ({ label, iconName }) => {
    return (
        <span className={styles["c-tag"]}>
            <Icon name={iconName} small={true} />
            <p className={styles["c-tag_label"]}>{label}</p>
        </span>

    )
}

export default Tag;