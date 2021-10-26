import { Photo, PhotoDispatch } from "../../types/photo";
import api from "../../utils/api";

export const getPhoto=()=>async(dispatch:PhotoDispatch)=>{
    dispatch({type:"GET_PHOTO_START"});
    try {
        const response=await api().get<Photo[]>("/photos");
        const temp=response.data.slice(0,10);
        dispatch({type:"GET_PHOTO_SUCCESS",payload:temp});
    } catch (error) {
        dispatch({type:"GET_PHOTO_ERROR"})
    }
}