import { PhotoAction, PhotoState } from "../../types/photo"

const defaultState:PhotoState={
    data:[],
    loading:false,
    error:""
}

const productReducer=(state:PhotoState=defaultState,action:PhotoAction):PhotoState=>{
    switch (action.type) {
        case "GET_PHOTO_START":
            return {...state,loading:true,error:""}
        case "GET_PHOTO_SUCCESS":
            return {...state,loading:false,data:action.payload,error:""}
        case "GET_PHOTO_ERROR":
            return {...state,loading:false,error:"Get Photos error"}
    
        default:
           return state;
    }
}

export default productReducer;