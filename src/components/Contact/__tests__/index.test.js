import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';


afterEach(cleanup);


describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact/>);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});


describe(' text content', () => {
    it('match text content to be contact me', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('h1tag1')).toHaveTextContent('Contact me')
    });
});

describe('submit button', () => {
    it('match text conect to be submit', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('button1')).toHaveTextContent('Submit')
    });
});
