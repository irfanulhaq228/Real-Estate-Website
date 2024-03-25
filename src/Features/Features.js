import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    houseListType: "forRent",
    houseMinPrice: "",
    houseMaxPrice: "",
    houseBedrooms: "any",
    houseBathrooms: "any",
    houseType: "all"
};

export const FeaturesSlice = createSlice({
    name: "Features",
    initialState,
    reducers: {
        updateHouseListType: (state, action) => {
            state.houseListType = action.payload;
        },
        updateHouseMinPrice: (state, action) => {
            state.houseMinPrice = action.payload;
        },
        updateHouseMaxPrice: (state, action) => {
            state.houseMaxPrice = action.payload;
        },
        updateHouseBedrooms: (state, action) => {
            state.houseBedrooms = action.payload;
        },
        updateHouseBathrooms: (state, action) => {
            state.houseBathrooms = action.payload;
        },
        updateHouseType: (state, action) => {
            state.houseType = action.payload;
        },
    }
});

export const { updateHouseListType, updateHouseMinPrice, updateHouseMaxPrice, updateHouseBedrooms, updateHouseBathrooms, updateHouseType } = FeaturesSlice.actions;

export const featuresReducers = FeaturesSlice.reducer;