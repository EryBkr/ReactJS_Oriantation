import { DefaultButton, DetailsList } from '@fluentui/react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Photo } from '../types/photo'

interface Props {
    posts: Photo[]
    loading: boolean
  }

const PhotoList:React.FC<Props>=({ posts, loading })=> {

    //Route Yönlendirme işlemleri için
    const history=useHistory();


    if (loading) {
        return <h2>Loading...</h2>;
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
    },
    {
      key:"islemler",
      name:"İşlemler",
      fieldName:"islemler",
      minWidth: 200,
      maxWidth: 500,
      isResizable: true,
      onRender: (item: any) => {
        return (
          <DefaultButton
          className='goruntuleButton'
          text='Görüntüle'
          primary
          onClick={() =>{history.push(`/photo/edit/${item.id}`)}}
       />
        );
     }
    }
  ];
  
    return (
        
        <DetailsList items={posts} columns={columns}/>
    )
}

export default PhotoList
