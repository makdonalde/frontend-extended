import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import GenaBukinAvatar from 'shared/assets/tests/gena-bukin.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 44,
        avatar: GenaBukinAvatar,
        city: 'Vitebsk',
        country: Country.Belarus,
        currency: Currency.EUR,
        first: 'Gena',
        lastname: 'Bukin',
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'bla',
};
