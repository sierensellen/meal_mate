
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from 'next/link';
import Icon from '../icon/Icon';
import CardList from "./CardList";
import { Icons } from '../icon/Icon.types';
import { CardListProps } from './CardList.types';


export default {
    title: "Componente/Tag",
    component: CardList,
} as ComponentMeta<typeof CardList>;

const dummy: CardListProps = {
    cards: [{
        img: { path: "/assets/img/jpg/recipe.jpg", alt: "recipe" },
        title: "Balletjes in tomatensaus",
        tags: [{ label: "3,95", iconName: Icons.Vriezer }, { label: "veel", iconName: Icons.Vriezer }, { label: "lang", iconName: Icons.Vriezer }],
        icons: [{ name: Icons.Vriezer }]
    }, {
        img: { path: "/assets/img/jpg/recipe.jpg", alt: "recipe" },
        title: "Balletjes in tomatensaus",
        tags: [{ label: "3,95", iconName: Icons.Vriezer }, { label: "veel", iconName: Icons.Vriezer }, { label: "lang", iconName: Icons.Vriezer }],
        icons: [{ name: Icons.Vriezer }]
    }, {
        img: { path: "/assets/img/jpg/recipe.jpg", alt: "recipe" },
        title: "Balletjes in tomatensaus",
        tags: [{ label: "3,95", iconName: Icons.Vriezer }, { label: "veel", iconName: Icons.Vriezer }, { label: "lang", iconName: Icons.Vriezer }],
        icons: [{ name: Icons.Vriezer }]
    }, {
        img: { path: "/assets/img/jpg/recipe.jpg", alt: "recipe" },
        title: "Balletjes in tomatensaus",
        tags: [{ label: "3,95", iconName: Icons.Vriezer }, { label: "veel", iconName: Icons.Vriezer }, { label: "lang", iconName: Icons.Vriezer }],
        icons: [{ name: Icons.Vriezer }]
    }, {
        img: { path: "/assets/img/jpg/recipe.jpg", alt: "recipe" },
        title: "Balletjes in tomatensaus",
        tags: [{ label: "3,95", iconName: Icons.Vriezer }, { label: "veel", iconName: Icons.Vriezer }, { label: "lang", iconName: Icons.Vriezer }],
        icons: [{ name: Icons.Vriezer }]
    }]
}

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = { ...dummy };