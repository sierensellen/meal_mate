import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from './Icon';
import { Icons } from './Icon.types';

export default {
	title: 'Componente/Icon',
	component: Icon,
} as ComponentMeta<typeof Icon>;

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = { name: Icons.Vriezer };

export const Small = Template.bind({});
Small.args = { name: Icons.Vriezer, small: true };
