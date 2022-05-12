import { DefaultComponentProps } from '@shared/types';

import { CardProps } from '../Card/Card.types';

export interface CardListProps extends DefaultComponentProps {
	cards: CardProps[];
}
