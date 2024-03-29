import axios from "axios";
import { URL } from "../URLs";

export const getRentalHomes = async() => {
    try{
        const result = await axios.get(`${URL}/home-for-rent/approved`);
        return result;
    }catch(error){
        console.log(error);
        return error;
    }
};

export const getSaleHomes = async() => {
    try{
        const result = await axios.get(`${URL}/home-for-sale/approved`);
        return result;
    }catch(error){
        console.log(error);
        return error;
    }
};

export const getHomeInfoById = async(id, type) => {
    try{
        var result = {};
        if(type === "rent"){
            result = await axios.get(`${URL}/home-for-rent/${id}`);
        }else{
            result = await axios.get(`${URL}/home-for-sale/${id}`);
        }
        return result;
    }catch(error){
        console.log(error);
        return error;
    }
};

export const createUser = async(data) => {
    try{
        const response = await axios.post(`${URL}/user`, data);
        return response;
    }catch(error){
        return error;
    }
};

export const loginUser = async(data) => {
    try{
        const response = await axios.post(`${URL}/user/login`, data);
        return response;
    }catch(error){
        return error;
    }
};

export const apiFavouriteHouses = async(data) => {
    try{
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const result = await axios.post(`${URL}/favourite-houses`, { userId, housesId: data });
        return result;
    }catch(error){
        console.log(error);
        return error;
    }
};

export const getFavouriteHousesByUser = async() => {
    try{
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const result = await axios.get(`${URL}/favourite-houses/${userId}`);
        return result;
    }catch(error){
        return error;
    }
};

export const getFavouriteHousesInfo = async(data) => {
    try{
        const result = await axios.post(`${URL}/favourite-houses/info`, { favouriteHouses: data })
        return result;
    }catch(error){
        return error;
    }
};

export const editUserInfo = async(data) => {
    try{
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const result = await axios.post(`${URL}/user/${userId}`, data);
        return result;
    }catch(error){
        return error;
    }
};

export const getUserById = async() => {
    try{
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const result = await axios.get(`${URL}/user/${userId}`);
        return result;
    }catch(error){
        return error;
    }
};