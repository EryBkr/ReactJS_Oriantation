import { DetailsList, IColumn, mergeStyles, PrimaryButton } from '@fluentui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store';
import { getPhoto } from '../store/actions/photoAction';
import { Image, ImageFit } from '@fluentui/react/lib/Image';
import { Link } from '@fluentui/react/lib/Link';
import { useHistory } from 'react-router-dom';
import { Pagination } from '@uifabric/experiments';

  

function Photo() {

    //reducer state bilgisi alınıyor
    const {data,loading,error}=useSelector((state:AppState)=>state.photo);
    
    //Pagination State
    const [page,setPage]=useState(0);
    //Current Page handle
    const changePage=(currentPage:number)=>{
      setPage(currentPage);
      alert(currentPage+1);
    }

    //Action erişimi için kullanacağız
    const dispatch=useDispatch();

     //Route Yönlendirme işlemleri için
     const history=useHistory();

    //component yüklendiği zaman api çağrımı yapacak 
   useEffect(()=>{
    if(!(data.length>0)){
     dispatch(getPhoto());
    }
},[]);  

const onClick=()=>{
  history.push("/search");
}


//Table column features
const columns = [
    {
      key: "id",
      name: "Id",
      fieldName: "id",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
    },
    {
      key: "title",
      name: "Title",
      fieldName: "title",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
    },
    {
      key: "albumId",
      name: "Album",
      fieldName: "albumId",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
    },
    {
      key: "url",
      name: "Url",
      fieldName: "url",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
    },
    {
      key: "thumbnailUrl",
      name: "Thumbnail",
      fieldName: "thumbnailUrl",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
    }
  ];

    return (
    <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm9 ms-md9 ms-lg10 ms-lgPush1">
            <h1>Detail List Component</h1>
            <DetailsList items={data} columns={columns}/>
            <Pagination
            selectedPageIndex={page}
            pageCount={10}
            onPageChange={(page)=>changePage(page)}
            firstPageIconProps={{ iconName: 'DoubleChevronLeft' }}
            previousPageIconProps={{ iconName: 'ChevronLeft' }}
            nextPageIconProps={{ iconName: 'ChevronRight' }}
            lastPageIconProps={{ iconName: 'DoubleChevronRight' }}
    />
        <PrimaryButton style={{marginTop:20,float:"right"}} text="Permission List" onClick={onClick}  />
        </div>
    </div>
    )    
}

export default Photo
