import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

export default {
	title: 'Componente/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const dummy = {
	href: 'https://www.google.com',
	isExternal: true,
};

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}> dummy tekst </Button>;

export const Default = Template.bind({});
Default.args = { ...dummy };
