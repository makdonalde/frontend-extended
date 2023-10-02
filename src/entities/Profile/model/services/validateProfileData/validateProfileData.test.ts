import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const profileData = {
    username: 'blabla',
    age: 1,
    avatar: '-1',
    city: 'Vitebsk',
    country: Country.Belarus,
    currency: Currency.EUR,
    first: 'Gena',
    lastname: 'Bukin',
};
describe('validateProfileData', () => {
    test('success', async () => {
        expect(validateProfileData(profileData)).toEqual([]);
    });
    test('without one param', async () => {
        expect(validateProfileData({ ...profileData, first: '' })).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('without all params', async () => {
        expect(validateProfileData()).toEqual([ValidateProfileError.NO_DATA]);
    });
});
