
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from 'next/link';
import Icon from '../icon/Icon';
import Card from "./Card";
import { Icons } from '../icon/Icon.types';


export default {
    title: "Componente/Tag",
    component: Card,
} as ComponentMeta<typeof Card>;

const dummy = {
    img: {path: "/assets/img/jpg/recipe.jpg", alt:"recipe" },
    title: "Balletjes in tomatensaus",
    tags: [{label: "3,95", iconName: Icons.Vriezer}, {label: "veel", iconName: Icons.Vriezer}, {label: "lang", iconName: Icons.Vriezer}],
    Icons: [{name: Icons.Vriezer}]
}

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { ...dummy };