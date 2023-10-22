import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import MovieListPage from "./MovieListPage";

const mockAxios = new MockAdapter(axios);

describe("MovieListPage Component", () => {
    beforeEach(() => {
        mockAxios.reset();
    });

    it("renders the MovieListPage component", () => {
        render(<MovieListPage />);
        const searchBarElement = screen.getByTestId("searchButton");
        expect(searchBarElement).toBeInTheDocument();
    });

    it("handles search correctly", async () => {
        mockAxios.onGet("http://localhost:4000/movies").reply(200, {
            data: [{ id: 1, title: "Movie 1" }],
        });

        render(<MovieListPage />);
        const searchInput = screen.getByPlaceholderText("Search for movies");
        fireEvent.change(searchInput, { target: { value: "Movie 1" } });

        // Wait for the Axios request and response
        await waitFor(() => {
            const movieTitleElement = screen.getByText("Movie 1");
            expect(movieTitleElement).toBeInTheDocument();
        });
    });

    it("handles genre selection correctly", async () => {
        mockAxios.onGet("http://localhost:4000/movies").reply(200, {
            data: [{ id: 1, title: "Movie 1" }],
        });

        render(<MovieListPage />);
        const selectGenreElement = screen.getByTestId("selectGenre");
        fireEvent.change(selectGenreElement, { target: { value: "Adventure" } });

        // Wait for the Axios request and response
        await waitFor(() => {
            const movieTitleElement = screen.getByText("Movie 1");
            expect(movieTitleElement).toBeInTheDocument();
        });
    });

    it("handles sorting correctly", async () => {
        mockAxios.onGet("http://localhost:4000/movies").reply(200, {
            data: [{ id: 1, title: "Movie 1" }, { id: 2, title: "Movie 2" }],
        });

        render(<MovieListPage />);
        const sortControlElement = screen.getByTestId("sortControl");
        fireEvent.change(sortControlElement, { target: { value: "title" } });

        // Wait for the Axios request and response
        await waitFor(() => {
            const firstMovieTitleElement = screen.getByText("Movie 1");
            const secondMovieTitleElement = screen.getByText("Movie 2");
            expect(firstMovieTitleElement).toBeInTheDocument();
            expect(secondMovieTitleElement).toBeInTheDocument();
            expect(
                screen.getByText("Movie 1").nextElementSibling
            ).toBe(secondMovieTitleElement);
        });
    });
});
