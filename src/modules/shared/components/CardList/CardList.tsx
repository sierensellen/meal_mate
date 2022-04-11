import { CardListProps } from './CardList.types';
import styles from './CardList.module.scss';
import React, { FC } from 'react';
import Card from "../card/Card";

const CardList: FC<CardListProps> = ({ cards }) => {
    return (
        <div className={styles["c-card-list"]}>
            {cards.map((card, index) => (
                <Card {...card} className={styles["c-card-list__card"]} key={`card-${index}`} />
            ))}
        </div>

    )
}

export default CardList;