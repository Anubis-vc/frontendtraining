import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function Button(props) {
//   const buttonStyle = {
//     color: props.color,
//     fontSize: props.fontSize + 'px'
//   };

//   return (
//     <button style={buttonStyle}>{props.text}</button>
//   );
// }

// Example of destructuring
function Button({text= "Click Me!", color= "blue", fontSize= 12, handleClick}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px'
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>{text}</button>
  );
}

export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} handleClick={
        () => handleButtonClick("https://www.google.com")}/>
      <Button text="Don't Click Me!" color="red" fontSize={12} handleClick={
        () => handleButtonClick("https://www.google.com")}/>
      <Button text="Click Me!" color="blue" fontSize={20} handleClick={
        () => handleButtonClick("https://www.google.com")}/>
    </div>
  );
}
