import { Checkbox, IStackTokens, PrimaryButton, SearchBox, Stack } from '@fluentui/react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Search() {

    const permissionList=["Admin","Editor","User"];
    const [tempPermission, setTempPermission] = useState(permissionList);

     //Route Yönlendirme işlemleri için
    const history=useHistory();
    const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

    const onSearch=(key:string)=>{
       const testArray=tempPermission.filter(name=>name.toLocaleLowerCase().includes(key.toLocaleLowerCase()));
       setTempPermission(testArray);
    }

    const onClear=()=>{
        setTempPermission(permissionList);
    }

    const onClick=()=>{
       history.push("/login");
     }

    return (
    <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm9 ms-md9 ms-lg8 ms-lgPush2">
        <Stack style={{marginTop:15}} tokens={stackTokens}>
            <SearchBox placeholder="Search" onClear={onClear} onSearch={newValue => onSearch(newValue)} />
            {
                tempPermission.map(name=> (
                    <Checkbox label={name} onChange={event=>{console.log(event)}} />
                ))
            }
        </Stack>
        <PrimaryButton style={{marginTop:10,float:"right"}} text="Save" onClick={onClick}  />
        </div>
    </div>
    )
}

export default Search
