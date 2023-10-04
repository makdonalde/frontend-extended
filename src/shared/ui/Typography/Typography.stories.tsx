import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Typography, TypographySize, TypographyTheme } from '..';

export default {
    title: 'shared/Typography',
    component: Typography,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsun',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description Description Description Description',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsun',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Description Description Description Description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});

Error.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    theme: TypographyTheme.ERROR,
};

export const SizeM = Template.bind({});
SizeM.args = {
    size: TypographySize.M,
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
};
export const SizeL = Template.bind({});
SizeL.args = {
    size: TypographySize.L,
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
};
