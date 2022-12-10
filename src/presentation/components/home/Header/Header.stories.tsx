
import { Meta, Story } from '@storybook/react/types-6-0';
import { Header,IProps } from "./Header";

export default {
  title: 'Header',
  component: Header,
} as Meta;


export const Template: Story<IProps> = (args) => <Header {...args} />;
