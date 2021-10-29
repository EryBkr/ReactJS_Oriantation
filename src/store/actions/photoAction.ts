import { Photo, PhotoDispatch } from "../../types/photo";
import api from "../../utils/api";

 export const getPhoto=(first:number,last:number)=>async(dispatch:PhotoDispatch)=>{
     dispatch({type:"GET_PHOTO_START"});
     try {
         const response=await api().get<Photo[]>("/photos");
         const tempData=response.data.slice(first,last);
         dispatch({type:"GET_PHOTO_SUCCESS",payload:response.data});
         
     } catch (error) {
         dispatch({type:"GET_PHOTO_ERROR"})
     }
 }

 export const getByIdPhoto=(photoId:number)=>async(dispatch:PhotoDispatch)=>{
    dispatch({type:"GET_BY_ID_PHOTO_START"});
    try {
        const response=await api().get<Photo>("/photos/"+photoId);
        dispatch({type:"GET_BY_ID_PHOTO_SUCCESS",payload:response.data});
        
    } catch (error) {
        dispatch({type:"GET_BY_ID_PHOTO_ERROR"})
    }
}

