import { IStackProps, IStackStyles, PrimaryButton, Stack, TextField } from '@fluentui/react'
import React,{useState} from 'react'
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';


function Login() {
    
     //Route Yönlendirme işlemleri için
    const history=useHistory();

    const stackTokens = { childrenGap: 50 };
    const stackStyles: Partial<IStackStyles> = { root: { width: 750 } };
    const columnProps: Partial<IStackProps> = {
        tokens: { childrenGap: 15 },
        styles: { root: { width: 300 } },
      };

      const [firstTextFieldValue, setFirstTextFieldValue] = useState('');
      const [secondTextFieldValue, setSecondTextFieldValue] = useState('');

      const onChangeFirstTextFieldValue = React.useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
          setFirstTextFieldValue(newValue || '');
        },
        [],
      );

      const onChangeSecondTextFieldValue = React.useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
          if (!newValue || newValue.length <= 5) {
            setSecondTextFieldValue(newValue || '');
          }
        },
        [],
      );

      const onClick=()=>{
         alert(`${firstTextFieldValue} hoşgeldiniz. Anasayfaya yönlendiriliyorsunuz`);
        history.push("/photo");
      }

      
    return (
       <>
        <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2 ms-smPush5">
              <img width={250} alt="smartiks"  src="https://www.yildizteknopark.com.tr/firma_logolar/SMART%C4%B0KS%20YAZILIM%20A.%C5%9E..png"/>
              <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                <Stack {...columnProps}>
                    <TextField value={firstTextFieldValue} onChange={onChangeFirstTextFieldValue} label="Username" name="userName" required={true}/>
                    <TextField 
                    value={secondTextFieldValue}
                    label="Password" 
                    required
                    type="password"
                    canRevealPassword
                    onChange={onChangeSecondTextFieldValue}
                     />
                <PrimaryButton text="Login" onClick={onClick} />
                </Stack>
              </Stack>
              </div>
          </div>
       </>
    )
}

export default Login
