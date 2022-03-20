
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from 'next/link';
import Tag from "./Tag";


export default {
    title: "Componente/Tag",
    component: Tag,
} as ComponentMeta<typeof Tag>;

const dummy = {
    href: "https://www.google.com",
    isExternal: true
}

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = { ...dummy };