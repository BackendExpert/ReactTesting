import React from 'react'
import {
     ZeroNumberFill,
     ZeroNumberSqureFill,
     OneNumberFill,
     OneNumberSqureFill,
     OneTwoThree,
     ZeroNumberOutLine, 
     ZeroNumberSqureOutLine,
     OneNumberOutline,
     OneNumberSqureOutLine,

     LogoAlexa,
     LogoAlipay,
     LogoAmazon,
     LogoAmd

} from 'react-icons';

const IconTest = () => {
  return (
    <div>
        <h1>IconTest</h1>



        <h1>Logos</h1>
        <LogoAlexa color={"blue"} size={150}/>
        <LogoAlipay color={"blue"} size={150}/>
        <LogoAmazon color={"blue"} size={150}/>
        <LogoAmd color={"blue"} size={150}/>

    </div>
  )
}

export default IconTest