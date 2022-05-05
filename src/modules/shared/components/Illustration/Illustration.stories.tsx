import { ComponentMeta, ComponentStory } from '@storybook/react';

import Illustration from './Illustration';
import { illustrationMock } from './illustration.mock';

export default {
	title: 'Componente/Illustration',
	component: Illustration,
} as ComponentMeta<typeof Illustration>;

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof Illustration> = (args) => <Illustration {...args} />;

export const Default = Template.bind({});
Default.args = { ...illustrationMock };
