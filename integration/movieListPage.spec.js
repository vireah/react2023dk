/// <reference types="cypress" />
import { getByTestId } from '@testing-library/cypress';

describe('MovieListPage Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4000/movies');
    });

    it('should search for a movie', () => {
        cy.fixture('movies.json').as('movies'); // Create a fixture with sample movie data

        cy.get('[data-testid="search-input"]').type('Movie Title');
        cy.get('[data-testid="search-button"]').click();

        cy.get('@movies').then((movies) => {
            movies.forEach((movie) => {
                cy.getByTestId('movieTile').should('contain', movie.title);
            });
        });
    });

    it('should select a genre', () => {
        cy.get('[data-testid="genre-select"]').select('Adventure');
        cy.getByTestId('movieTile').should('contain', 'Adventure');
    });

    it('should change the sorting criteria', () => {
        cy.get('[data-testid="sortControl"]').select('title');
        cy.getByTestId('sortControl').should('contain', 'title');
    });
});
