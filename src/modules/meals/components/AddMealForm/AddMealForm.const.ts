import { boolean, mixed, number, object, string } from 'yup';

export const ADD_MEAL_FORM_SCHEMA = () => {
	return object({
		bgColor: string().matches(/^$|^#([0-9A-F]{3}){1,2}$/i, { message: 'moet een kleur zijn' }),
		color: string().matches(/^$|^#([0-9A-F]{3}){1,2}$/i, { message: 'moet een kleur zijn' }),
		rotation: number().required('draai de vorm'),
		scale: number().required('geef de juiste grootte'),
		positionX: number().required("Zet de vorm op z'n plaats"),
		positionY: number().required("Zet de vorm op z'n plaats"),
		name: string().required('Geef je recept een naam'),
		price: number().required('Hoeveel zal dit kosten?'),
		time: number().required('Hoelang zal dat hier duren?'),
		washing: string().required('Hoeveel langer zal het nog duren?'),
		freezer: boolean().required('Mag het in de vriezer?'),
		ingredients: mixed(),
		ingredientAmounts: mixed(),
		method: string().required('hoe moet dit?'),
	});
};
