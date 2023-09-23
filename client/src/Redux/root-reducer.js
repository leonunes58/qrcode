import { combineReducers } from "redux";
import qrCodeReducer from './qrCode/slice';

const rootReducer = combineReducers({qrCodeReducer});

export default rootReducer;