/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';

import { AxiosClient } from '../../utils/createAxiosClient';

export const thunkExample = createAsyncThunk<{}, {}>('EXAMPLE', async (payload, thunkAPI) => {
  try {
    await AxiosClient().get('----');
    return payload;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
