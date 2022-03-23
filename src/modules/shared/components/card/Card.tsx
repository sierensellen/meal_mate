import { CardProps } from './Card.types';
import styles from './Card.module.scss';
import React, { FC } from 'react';
import Icon from "../icon/Icon";
import Tag from "../tag/Tag"
import Image from 'next/image';

const Card: FC<CardProps> = ({ img, title, tags, icons }) => {
    return (
        <article className={styles["c-card"]}>
            <div className={styles["c-card_image"]}>
                <Image src={img.path} alt={img.alt} layout='fill' objectFit='cover' />
            </div>
            <div className={styles["c-card_content"]}>
                <h3>{title}</h3>
                <div className={styles["c-card_tags"]}>
                    {tags.map((tag, index) => {
                        return (
                            <Tag key={`tag-${index}`} {...tag} />
                        )
                    })}
                </div>
                <div className={styles["c-card_icons"]}>
                    {icons.map((icon, index) => (
                        <Icon {...icon} className={styles["c-card_icon"]} key={`icon-${index}`} />
                    ))}
                </div>
            </div>
        </article>

    )
}

export default Card;