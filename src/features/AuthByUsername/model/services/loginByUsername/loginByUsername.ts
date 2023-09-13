import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUserName{
    username:string;
    password:string
}

export const loginByUsername = createAsyncThunk<User, LoginByUserName>(
    'login/loginByUsername',
    async ({ username, password }, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8000/login', {
                username, password,
            });
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue('err');
        }
    },
);
