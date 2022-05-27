import logo from './logo.svg';
import React,{createContext} from 'react';
import './App.css';
import {Child}  from './Child';
import OtherChild from  './OtherChild'
export const CompleteData = createContext();

function App() {
  const[color, setColor]= React.useState('red')
  const[day,setDay]= React.useState('Monday');
  const getDay=(day) =>{
    console.warn(day);
    setDay(day)
  }
  return (
    <CompleteData.Provider value={{appColor:color,getDay:getDay}}>
    <div className="App">
      <h1>App Component {day}</h1>
      <Child/>
      <OtherChild/>
    </div>
    </CompleteData.Provider>
  );
}

export default App;
