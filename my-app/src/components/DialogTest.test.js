import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Portal } from 'react-portal';
import Dialog from './Dialog';

jest.mock('react-portal', () => ({
    Portal: ({ children }) => children,
}));

describe('Dialog', () => {
    it('should render button with correct text', () => {
        const { getByRole } = render(<Dialog title="Test Dialog" buttonName="Open Dialog" />);
        const button = getByRole('button', { name: 'Open Dialog' });

        expect(button).toBeInTheDocument();
    });

    it('should open dialog when button is clicked', () => {
        const { getByRole, getByText } = render(
            <Dialog title="Test Dialog" buttonName="Open Dialog">
                <p>Dialog content</p>
            </Dialog>
        );
        const button = getByRole('button', { name: 'Open Dialog' });

        fireEvent.click(button);

        expect(getByText('Test Dialog')).toBeInTheDocument();
        expect(getByText('Dialog content')).toBeInTheDocument();
    });

    it('should close dialog when close button is clicked', () => {
        const { getByRole, queryByText } = render(
            <Dialog title="Test Dialog" buttonName="Open Dialog">
                <p>Dialog content</p>
            </Dialog>
        );
        const button = getByRole('button', { name: 'Open Dialog' });

        fireEvent.click(button);

        const closeButton = getByRole('button', { name: '×' });

        fireEvent.click(closeButton);

        expect(queryByText('Test Dialog')).not.toBeInTheDocument();
        expect(queryByText('Dialog content')).not.toBeInTheDocument();
    });
});