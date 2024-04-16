import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  favouriteHouses: [],
  houseListType: "forRent",
  houseMinPrice: "",
  houseMaxPrice: "",
  houseBedrooms: "any",
  houseBathrooms: "any",
  houseType: "all",
  agentInfo: {},
  ownerHomeInfo: {},
};

export const FeaturesSlice = createSlice({
  name: "Features",
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.auth = action.payload;
    },
    updateFavouriteHouses: (state, action) => {
      state.favouriteHouses = action.payload;
    },
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
    updateAgentInfo: (state, action) => {
      state.agentInfo = action.payload;
    },
    updateOwnerHomeInfo: (state, action) => {
      state.ownerHomeInfo = action.payload;
    },
  },
});

export const {
  updateAuth,
  updateFavouriteHouses,
  updateHouseListType,
  updateHouseMinPrice,
  updateHouseMaxPrice,
  updateHouseBedrooms,
  updateHouseBathrooms,
  updateHouseType,
  updateAgentInfo,
  updateOwnerHomeInfo,
} = FeaturesSlice.actions;

export const featuresReducers = FeaturesSlice.reducer;
