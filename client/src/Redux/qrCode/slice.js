import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    currentQrCode: `http://api.qrserver.com/v1/create-qr-code/?data=!&size=400x400&bgcolor=fffff`
}

const qrCodeSlice = createSlice({
    name: 'qrcode',
    initialState,
    reducers: {
        createQrCode: (state, action) => {
            state.currentQrCode = action.payload;
        },
        home: (state, action) => {
            state.currentQrCode = `http://api.qrserver.com/v1/create-qr-code/?data=!&size=400x400&bgcolor=fffff`;
        }
    }
});
export const { createQrCode, home } = qrCodeSlice.actions;
export default qrCodeSlice.reducer;