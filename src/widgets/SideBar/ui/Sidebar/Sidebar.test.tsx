import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib';
import { Sidebar } from 'widgets/SideBar/ui/Sidebar/Sidebar';

describe('test', () => {
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
