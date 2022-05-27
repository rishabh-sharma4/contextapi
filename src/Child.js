import React,{useContext} from 'react'
import { CompleteData } from './App'
import SuperChild from './SuperChild'
export const Child = () => {
    const {appColor} = useContext(CompleteData)
    console.log(appColor)
  return (
    <div>
        <h1 style={{color:appColor}}>Child</h1>
        <SuperChild/>
    </div>
  )
}
