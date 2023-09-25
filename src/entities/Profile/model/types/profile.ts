import { Country, Currency } from 'shared/constants/common';

export interface Profile {
    lastname?: string;
    first?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}
export interface ProfileSchema{
    data?:Profile;
    form?:Profile;
    isLoading:boolean;
    error?:string
    readonly:boolean
}
