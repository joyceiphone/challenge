import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getAllUsers = () => {
  return axios.get(`${BASE_URL}/users`).then((response)=>response.data).catch((e)=>{console.log(e)});
};

export const getAgeCountWithItems = (item)=>{
    console.log(item);
    return axios.get(`${BASE_URL}/users/age?item=${item}`).then((response)=>response.data).catch((e)=>console.log(e));
}

export const getItemLists = ()=>{
  return axios.get(`${BASE_URL}/items`).then((response)=>response.data).catch((e)=>{console.log(e)});
}