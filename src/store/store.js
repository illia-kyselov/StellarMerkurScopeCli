import { configureStore } from '@reduxjs/toolkit';
import levelsReducer from './slices/levelsSlice';
import eventsReducer from './slices/eventsSlice';
import observationsReducer from './slices/observationsSlice';
import unitReducer from './slices/unitSlice';

export const store = configureStore({
    reducer: {
        levels: levelsReducer,
        events: eventsReducer,
        observations: observationsReducer,
        unit: unitReducer,
    }
});
