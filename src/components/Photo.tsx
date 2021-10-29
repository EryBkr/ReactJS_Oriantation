import { DetailsList, IColumn, mergeStyles, PrimaryButton } from '@fluentui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store';
import { getPhoto } from '../store/actions/photoAction';
import { Image, ImageFit } from '@fluentui/react/lib/Image';
import { Link } from '@fluentui/react/lib/Link';
import { useHistory } from 'react-router-dom';
import PaginationModel from '../types/pagination';
import BasePagination from './BasePagination';
import PhotoList from './PhotoList';


const Photo: React.FunctionComponent = (props: any) => {
   //reducer state bilgisi alınıyor
   const {data,loading,error}=useSelector((state:AppState)=>state.photo);
   const [totalCounts,setTotalCount]=useState(5000);
   const [postsPerPage,setPostsPerPage]=useState(15);
   const [currentPage,setCurrentPage]=useState(1);

   
     
 //Action erişimi için kullanacağız
 const dispatch=useDispatch();

 //Route Yönlendirme işlemleri için
 const history=useHistory();

//Sayfa değişikliği için ekledim
const onClick=()=>{
  history.push("/search");
}

const changePage=(page:number)=>{
  debugger
  setCurrentPage(page); //i++ ++i
  const lastTest=currentPage*postsPerPage;
  const firstTest=lastTest-postsPerPage;
  dispatch(getPhoto(firstTest,lastTest));
}

     //component yüklendiği zaman api çağrımı yapacak 
     useEffect(()=>{
      if(!(data.length>0)){
        dispatch(getPhoto(0,15));
      //  setTotalCount(data.length);
      } 
  },[]);



    return (
        <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm9 ms-md9 ms-lg10 ms-lgPush1">
            <h1>Detail List Component</h1>
             <PhotoList posts={data}  loading={loading}/> 
            <BasePagination totalCount={totalCounts} currentPage={currentPage} changePage={changePage} postPerPage={postsPerPage} loading={loading} /> 
            <PrimaryButton style={{marginTop:20,marginBottom:20,float:"right"}} text="Permission List" onClick={onClick}  />
        </div>
      </div>
    )    
}

export default Photo
