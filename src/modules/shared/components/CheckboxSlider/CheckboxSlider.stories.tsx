import { ComponentMeta, ComponentStory } from '@storybook/react';

import CheckboxSlider from './CheckboxSlider';
import { checkboxSliderMock } from './checkboxSlider.mock';

export default {
	title: 'Componente/CheckboxSlider',
	component: CheckboxSlider,
} as ComponentMeta<typeof CheckboxSlider>;

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof CheckboxSlider> = (args) => <CheckboxSlider {...args} />;

export const Default = Template.bind({});
Default.args = { ...checkboxSliderMock };
