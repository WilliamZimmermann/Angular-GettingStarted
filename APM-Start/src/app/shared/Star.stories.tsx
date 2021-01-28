import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StarComponent } from './star.component';

export default {
    title: 'StarComponent',
    component: StarComponent,
} as Meta;

const Template: Story<StarComponent> = (args) => ({
    component: StarComponent,
    props: args,
});

export const YourStory = Template.bind({});
YourStory.args = {
    rating: 2
}