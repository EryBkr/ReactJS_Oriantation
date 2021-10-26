import { ThunkDispatch } from "redux-thunk";

//Photo get Model
export interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
  }

  //Reducer Dispatch
  export interface PhotoState{
    data:Photo[],
    loading:boolean,
    error:string
}

//Action Types
export interface GET_PHOTO_START{
    type:"GET_PHOTO_START";
  }
  
export interface GET_PHOTO_SUCCESS{
    type:"GET_PHOTO_SUCCESS";
    payload:Photo[];
  }
  
export interface GET_PHOTO_ERROR{
    type:"GET_PHOTO_ERROR";
  }

  export type PhotoAction=GET_PHOTO_START | GET_PHOTO_SUCCESS | GET_PHOTO_ERROR;

  export type PhotoDispatch=ThunkDispatch<PhotoState,void,PhotoAction>;