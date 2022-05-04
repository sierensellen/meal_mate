import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card from './Card';
import { cardMock } from './card.mock';

export default {
	title: 'Componente/Tag',
	component: Card,
} as ComponentMeta<typeof Card>;

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { ...cardMock };
