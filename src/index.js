import { configureStore } from "@reduxjs/toolkit";
import xyzReducer from './slices/xyzSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'xyz',
    storage
}


const STORE = configureStore({
    reducer: {
        // xyzReducer
        xyzReducer: persistReducer(persistConfig, xyzReducer)
    }
})


const persistor = persistStore(STORE)

export { persistor }
export default STORE