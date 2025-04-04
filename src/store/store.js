import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import levelsReducer from './slices/levelsSlice';
import eventsReducer from './slices/eventsSlice';
import observationsReducer from './slices/observationsSlice';
import unitReducer from './slices/unitSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    levels: levelsReducer,
    events: eventsReducer,
    observations: observationsReducer,
    unit: unitReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
