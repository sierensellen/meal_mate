import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from './Icon';
import { Icons } from './Icon.types';

export default {
	title: 'Componente/Icon',
	component: Icon,
} as ComponentMeta<typeof Icon>;

const dummy = {
	name: Icons.Vriezer,
};

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = { ...dummy };

export const Small = Template.bind({});
Small.args = { ...dummy };
