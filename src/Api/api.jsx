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