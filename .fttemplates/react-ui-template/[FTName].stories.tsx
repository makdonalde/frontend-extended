import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {<FTName>} from './<FTName>';

export default {
    title: 'pages/<FTName>',
    component: <FTName>,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof <FTName>>;

const Template: ComponentStory<typeof <FTName>> = () => <<FTName> />;

export const Normal = Template.bind({});
Normal.args = {};


export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
