import SortControl from '../components/SortControl';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/SortControl',
    component: SortControl,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};