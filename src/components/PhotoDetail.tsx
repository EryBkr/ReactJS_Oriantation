import { IStackProps, IStackStyles, Stack, TextField } from "@fluentui/react";
import { PrimaryButton } from "@uifabric/experiments/lib/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { AppState } from "../store";
import { getByIdPhoto } from "../store/actions/photoAction";
import { Photo } from "../types/photo";
import { Depths } from '@fluentui/theme';


function PhotoDetail() {
  //Parametreleri handle edebilmek için ekledim
  interface ParamTypes {
    photoId: string;
  }

  const photoObject:Photo={
      id:0,
      title:"",
      albumId:0,
      url:"",
      thumbnailUrl:""
  }


  const [photoModel,setPhotoModel]=useState(photoObject);

  //Action erişimi için kullanacağız
  const dispatch = useDispatch();
  const search = useLocation().search;

  const { photoId } = useParams<ParamTypes>();
  

       //component yüklendiği zaman api çağrımı yapacak 
       useEffect(()=>{
        axios.get<Photo>("https://jsonplaceholder.typicode.com/photos/"+photoId).then(
            function(res){setPhotoModel(res.data);}
        );
    },[]);

  const stackTokens = { childrenGap: 50 };
  const stackStyles: Partial<IStackStyles> = { root: { width: 1200 } };
  const columnProps: Partial<IStackProps> = {
      tokens: { childrenGap: 15 },
      styles: { root: { width: 1000 } },
    };

  return (
    <div className="ms-Grid-row">
    <div style={{marginTop:25}} className="ms-Grid-col ms-lg3 ms-smPush3">
  
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <Stack {...columnProps}>
          <TextField disabled value={photoModel.id.toString()}  label="Id" name="title" required={true}/>
          <TextField disabled value={photoModel.albumId.toString()}  label="Album Id" name="title" required={true}/>
          <TextField disabled value={photoModel.title}  label="Title" name="title" required={true}/>
          <TextField disabled value={photoModel.url}  label="Url" name="title" required={true}/>
          <TextField disabled value={photoModel.thumbnailUrl}  label="Thumbnail Url" name="title" required={true}/>
      </Stack>
    </Stack>
   
    </div>
</div>
  );
}

export default PhotoDetail;
