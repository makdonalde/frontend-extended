import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData,
    getProfileError, getProfileForm, getProfileIsLoading,
    getProfileReadonly, profileActions, ProfileCard, profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    useEffect(() => { dispatch(fetchProfileData()); }, [dispatch]);
    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile(
            { first: value || '' },
        ));
    }, [dispatch]);
    const onChangeLastname = useCallback((value) => {
        dispatch(profileActions.updateProfile({
            lastname: value || '',
        }));
    }, [dispatch]);
    const onChangeCity = useCallback((value) => {
        dispatch(profileActions.updateProfile({
            city: value || '',
        }));
    }, [dispatch]);
    const onChangeAge = useCallback((value) => {
        dispatch(profileActions.updateProfile({
            age: +value || 0,
        }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value) => {
        dispatch(profileActions.updateProfile({
            avatar: value || '',
        }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value) => {
        dispatch(profileActions.updateProfile({
            username: value || '',
        }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({
            currency: value || '',
        }));
    }, [dispatch]);
    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({
            country: country || '',
        }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader />
            <ProfileCard
                data={data}
                isLoading={isLoading}
                error={error}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCountry={onChangeCountry}
                onChangeCurrency={onChangeCurrency}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
