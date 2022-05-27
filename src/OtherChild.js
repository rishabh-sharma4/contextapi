import React,{useContext} from "react";
import { CompleteData } from "./App";
const OtherChild = ()=>{
    const {appColor} = useContext(CompleteData);
    return(
        <>
            <h1 style={{color:appColor}}>Other Child</h1>
        </>
    )
}
export default OtherChild;