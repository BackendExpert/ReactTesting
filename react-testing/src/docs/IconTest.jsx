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
     OneNumberSqureOutLine
} from 'react-icons';

const IconTest = () => {
  return (
    <div>
        <h1>IconTest</h1>
        <ZeroNumberFill color={"yellow"} size={150}/>
        <ZeroNumberSqureFill color={"red"} size={150}/>
        <OneNumberFill color={"green"} size={150}/>
        <OneNumberSqureFill color={"pink"} size={150}/>
        <OneTwoThree color={"blue"} size={150}/>
        <ZeroNumberOutLine color={"lightblue"} size={150}/>
        <ZeroNumberSqureOutLine color={"orange"} size={150}/>
        <OneNumberOutline color={"yellow"} size={150}/>
        <OneNumberSqureOutLine color={"blue"} size={150}/>

    </div>
  )
}

export default IconTest