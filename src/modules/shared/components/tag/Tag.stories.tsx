
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tag from "./Tag";
import { tagMock } from './tag.mock';


export default {
    title: "Componente/Tag",
    component: Tag,
} as ComponentMeta<typeof Tag>;

// export const Icon = () => <Icon name='test' href='/icons/vriezer.svg' path='assets/icons/vriezer.svg' />
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = { ...tagMock };