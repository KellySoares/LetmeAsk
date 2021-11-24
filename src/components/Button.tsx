//import { useState } from "react";
/*
 type ButtonProps = {
    children?: string;
}
type ButtonProps = {
    text?: string;
}
export function Button(props: ButtonProps) {
    return (
        <button>{props.text || 'Default '}</button>
    )
}
export function Button(props: ButtonProps) {
    return (
        <button>{props.children || 'Default '}</button>
    )
} 
export function Button() {
  //let counter = 0;
  const [counter, setCounter] = useState(0);

  function increment() {
    //counter += 1
    setCounter(counter + 1);
  }
  return <button className="button" onClick={increment}>{counter}</button>;
}*/
import "../styles/button.scss";
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props} />
        
  )
}
