import Dialog from '../components/Dialog';

export default {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

export const Dialog = {
    args: {
        primary: true,
        label: 'Dialog',
    },
};