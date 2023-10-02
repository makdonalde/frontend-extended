import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg:Arg) => AsyncThunkAction<Return, Arg, { rejectValue:RejectedValue }>

const mockedAxios = jest.mocked(axios, true);
jest.mock('axios');
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    public dispatch:jest.MockedFn<any>;

    public getState:()=>StateSchema;

    private actionCreator:ActionCreatorType<Return, Arg, RejectedValue>;

    public api: jest.MockedFunctionDeep<AxiosStatic>;

    public navigate:jest.MockedFn<any>;

    constructor(actionCreator:ActionCreatorType<Return, Arg, RejectedValue>, state?:DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.navigate = jest.fn();
        this.api = mockedAxios;
    }

    async callThunk(arg:Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });
        return result;
    }
}
