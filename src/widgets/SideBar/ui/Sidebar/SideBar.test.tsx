import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/SideBar/ui/Sidebar/Sidebar';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('test navbar', () => {
    test('render navbar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('collapsing navbar', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-btn');
        expect(screen.getByTestId('sidebar-btn')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
