import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

import { Counter } from '..';

describe('Counter component', () => {
    test('with only first param', () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value-test')).toHaveTextContent('10');
    });
    test('increment', () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-test')).toHaveTextContent('11');
    });
    test('decrement', () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-test')).toHaveTextContent('9');
    });
});
