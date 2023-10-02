import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

const data = {
    username: 'admin',
    age: 44,
    avatar: 'avatar',
    city: 'Vitebsk',
    country: Country.Belarus,
    currency: Currency.EUR,
    first: 'Gena',
    lastname: 'Bukin',
};
describe('getProfileData', () => {
    test('base', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state ', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
