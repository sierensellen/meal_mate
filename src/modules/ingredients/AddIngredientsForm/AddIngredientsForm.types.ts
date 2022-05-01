import { DefaultComponentProps, Ingredient } from '@shared/types';

export interface AddIngredientsFormProps extends DefaultComponentProps {
	onCreate?: () => void;
}

export type AddIngredientFormState = Ingredient;
