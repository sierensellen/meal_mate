import { ComponentMeta, ComponentStory } from '@storybook/react';

import Select from './Select';
import { selectMock } from './select.mock';

export default {
	title: 'Componente/Select',
	component: Select,
} as ComponentMeta<typeof Select>;

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = { ...selectMock };
