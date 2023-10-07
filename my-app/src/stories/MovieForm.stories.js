import MovieForm from '../components/MovieForm';

export default {
    title: 'Components/MovieForm',
    component: MovieForm,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

export const Dialog = {
    args: {
        primary: true,
        label: 'MovieForm',
    },
};