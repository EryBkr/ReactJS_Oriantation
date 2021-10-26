import axios from "axios";

//BaseURL ve token işlemleri
const api= ()=>{
    const token=localStorage.getItem("token");
   return axios.create({
        baseURL:"https://jsonplaceholder.typicode.com/",
        headers:{
            Authorization:token?token:"",
        }
    })
};

export default api;