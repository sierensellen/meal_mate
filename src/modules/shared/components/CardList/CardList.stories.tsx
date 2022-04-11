
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardList from "./CardList";
import { cardListMock } from './cardList.mock';


export default {
    title: "Componente/Tag",
    component: CardList,
} as ComponentMeta<typeof CardList>;

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = { ...cardListMock };