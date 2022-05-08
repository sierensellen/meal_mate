import { ReactNode } from 'react';

import { DefaultComponentProps, ParsedMeal } from '@shared/types';

export interface CardProps extends DefaultComponentProps {
	meal: ParsedMeal;
	button?: ReactNode;
}
