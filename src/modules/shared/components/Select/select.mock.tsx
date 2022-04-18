import { Icon, Icons } from '@shared/components';

export const selectMock = {
	name: 'test',
	label: 'test',
	onChange: (e) => {
		console.log(e);
	},
	icon: <Icon name={Icons.Vriezer} />,
	options: [
		{ value: 'test1', label: 'label1' },
		{ value: 'test2', label: 'label2' },
	],
};
