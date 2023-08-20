import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with one first param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });
    test('with additional classes', () => {
        const expected = 'someClass someClass1 someClass2';
        expect(classNames('someClass', {}, ['someClass1', 'someClass2'])).toBe(expected);
    });
    test('with  mods', () => {
        const expected = 'someClass someClass1 someClass2 hovered isOpen';
        expect(classNames(
            'someClass',
            { hovered: true, isOpen: true },
            ['someClass1', 'someClass2'],
        )).toBe(expected);
    });
    test('with false mod', () => {
        const expected = 'someClass someClass1 someClass2 isOpen';
        expect(classNames(
            'someClass',
            { hovered: false, isOpen: true },
            ['someClass1', 'someClass2'],
        )).toBe(expected);
    });
    test('with undefined mod', () => {
        const expected = 'someClass someClass1 someClass2 isOpen';
        expect(classNames(
            'someClass',
            { hovered: undefined, isOpen: true },
            ['someClass1', 'someClass2'],
        )).toBe(expected);
    });
});
