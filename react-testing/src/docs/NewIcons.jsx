
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

} from '@jehankandy/jkreact-icons';
import {ButtonBlue, ButtonRed, ButtonGray, ButtonGreen, ButtonInfo, ButtonYellow} from '@jehankandy/react-jkcss'


const NewIcons = () => {
  return (
    <div>
        <h1>NewIcons</h1>
        <ZeroNumberFill color={"red"} size={200} />
        <ZeroNumberSqureFill color={"red"} size={200} />
        <OneNumberFill color={"red"} size={200} />
        <OneNumberSqureFill color={"red"} size={200} />
        <OneTwoThree color={"red"} size={200} />
        <ZeroNumberOutLine color={"red"} size={200} />
        <ZeroNumberSqureOutLine color={"red"} size={200} />
        <OneNumberOutline color={"red"} size={200} />
        <OneNumberSqureOutLine color={"red"} size={200} />


        <LogoAlexa color={"red"} size={200} />
        <LogoAlipay color={"red"} size={200} />
        <LogoAmazon color={"red"} size={200} />
        <LogoAmd color={"red"} size={200} />

        <ButtonBlue>
            HI all
        </ButtonBlue>

    </div>
  )
}

export default NewIcons