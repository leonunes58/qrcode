import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    currentQrCode: '',
}

const qrCodeSlice = createSlice({
    name: 'qrcode',
    initialState,
    reducers: {
        createQrCode: (state, action) => {
            state.currentQrCode = action.payload;
        },
        home: (state, action) => {
            state.currentQrCode = '';
        }
    }
});
export const { createQrCode, home } = qrCodeSlice.actions;
export default qrCodeSlice.reducer;