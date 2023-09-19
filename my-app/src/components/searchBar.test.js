import { render, screen, fireEvent, act} from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from "@testing-library/user-event";

describe('SearchBar', () => {
    it('Test that component renders an input with the value equal to initial value passed in props', () => {
        const initialQuery="Lol";
        act(() => {
            render(<SearchBar initialQuery={initialQuery} />);
        });

        const searchButton = screen.getByTestId("searchButton");
        act(() => {
            fireEvent.click(searchButton);
        });

        const valueSpan = screen.getByTestId("inputSearch");

        expect(valueSpan.value).toBe(initialQuery);
    });
});


test("Test that after typing to the input and a \"click\" event on the Submit button, the \"onChange\" prop is called with proper value", async () => {
    act(() => {
        render(<SearchBar />);
    });
    const input = await screen.getByTestId("inputSearch");
    act(() => {
        userEvent.type(input, "new value");
    });

    const searchButton = screen.getByTestId("searchButton");
    act(() => {
        fireEvent.click(searchButton);
    });

    const valueSpan = screen.getByTestId("inputSearch");
    expect(valueSpan.value).toBe("new value");
});

test("Test that after typing to the input and pressing Enter key, the \"onChange\" prop is called with proper value", async () => {
    act(() => {
        render(<SearchBar />);
    });
    const input = await screen.getByTestId("inputSearch");
    act(() => {
        userEvent.type(input, "new value");
    });
    const searchButton = screen.getByTestId("searchButton");

    act(() => {
        fireEvent.keyDown(searchButton, {key: 'enter', keyCode: 13});
    });

    const valueSpan = screen.getByTestId("inputSearch");
    expect(valueSpan.value).toBe("new value");
});