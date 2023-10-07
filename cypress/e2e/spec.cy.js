/// <reference types="cypress" />
import { getByTestId } from '@testing-library/cypress';

describe('MovieListPage Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Replace with your app's URL
    });

    it('should search for a movie', () => {
        cy.fixture('movies.json').as('movies'); // Create a fixture with sample movie data

        cy.get('[data-testid="inputSearch"]').type('Lights');
        cy.get('[data-testid="searchButton"]').click();

        cy.get('@movies').then((movies) => {
            movies.forEach((movie) => {
                cy.findByText(movie.title).should('exist');
            });
        });
    });

    it('should select a genre', () => {
        cy.get('[data-testid="selectGenre"]').select('Adventure');
        cy.findByText('movieTile').should('contain', 'Adventure');
    });

    it('should change the sorting criteria', () => {
        cy.get('[data-testid="sortControl"]').select('title');
        cy.findByText('sortControl').should('contain', 'title');
    });
});
