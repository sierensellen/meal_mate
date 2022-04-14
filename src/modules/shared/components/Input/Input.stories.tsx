import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './Input';
import { inputMock } from './input.mock';

export default {
	title: 'Componente/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { ...inputMock };
