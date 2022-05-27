import React, {useContext} from 'react';
import { CompleteData } from './App';
const SuperChild = () =>{
 const {appColor,getDay} = useContext(CompleteData)
 const day="Saturday";
 return(
     <div>
         <h1 style={{color:appColor}}>SuperChild</h1>
         <button onClick={()=>getDay(day)}>Get Day</button>
     </div>
 )
}
export default SuperChild