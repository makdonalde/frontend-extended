import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData,
    getProfileError, getProfileForm, getProfileIsLoading,
    getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, ValidateProfileError,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useInitialEffect } from 'shared/lib';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Typography } from 'shared/ui';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    useInitialEffect(() => dispatch(fetchProfileData(id)));
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
    const validateErrorTranslation = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error occured'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age provided'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country provided'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('First and lastname are required'),
        [ValidateProfileError.NO_DATA]: t('No data provided'),
    };
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader />
            {validateErrors?.length && validateErrors.map((err: ValidateProfileError) => (
                <Typography
                    key={err}
                    text={validateErrorTranslation[err]}
                />
            ))}
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
