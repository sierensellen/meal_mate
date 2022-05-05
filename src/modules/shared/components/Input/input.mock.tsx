import { Icon, Icons } from '@shared/components';

export const inputMock = {
	name: 'test',
	type: 'text',
	placeholder: 'test',
	label: 'test',
	onChange: (e) => {
		// console.log(e);
	},
	icon: <Icon name={Icons.Vriezer} />,
};
