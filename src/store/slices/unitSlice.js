import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedUnit: null,
    coordinates: null,
};

const unitSlice = createSlice({
    name: 'unit',
    initialState,
    reducers: {
        setUnit: (state, action) => {
            state.selectedUnit = action.payload;
        },
        setCoordinates: (state, action) => {
            state.coordinates = action.payload;
        },
    },
});

export const { setUnit, setCoordinates } = unitSlice.actions;
export default unitSlice.reducer;
