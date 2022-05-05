import { object, string } from 'yup';

export const ADD_INGREDIENT_FORM_SCHEMA = () => {
	return object({
		name: string().required('Hoe noemt dit ingredient?'),
		category: string().required('Waar kan ik dit vinden in de winkel?'),
		metric: string().required('Hoe wil je dit meten?'),
	});
};
