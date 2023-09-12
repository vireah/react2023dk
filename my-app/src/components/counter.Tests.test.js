import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
    it('Test that component renders initial value provided in props', () => {
        const initialValue = 5;
        render(<Counter initialValue={initialValue} />);
        const valueSpan = screen.getByTestId('my-span');
        expect(valueSpan).toHaveTextContent(initialValue);
    });
});

test("Test that a click event on \"decrement\" button decrements the displayed value", () => {
    render(<Counter/>);

    const incrementBtn = screen.getByTestId("increment");
    fireEvent.click(incrementBtn);
    const valueSpan = screen.getByTestId('my-span');
    expect(valueSpan).toHaveTextContent("1");
});


test("Test that a click event on \"increment\" button increments the displayed value", () => {
    render(<Counter/>);

    const decrementBtn = screen.getByTestId("decrement");
    fireEvent.click(decrementBtn);
    const valueSpan = screen.getByTestId('my-span');
    expect(valueSpan).toHaveTextContent("-1");
});
