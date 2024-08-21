'use client'

import Link from "next/link";

type AppLogoProps = {
  title: string
  c: string
}
export default function AppLogo({title,c}:AppLogoProps) {
   const subTitle = 'it suphan';
   const dateNow  = new Date()
   const timeNow  = <p>{dateNow.toLocaleTimeString()}</p>
   const  isShow = true
   const  isShowDate = true
   const  onHandleClick = () =>{
    alert("Click Me!")
   }
  return (
   <>
      <p style={{color: c}} >{title}</p>
      <button onClick={onHandleClick}>Click me</button> {' '}
      <small>{subTitle.toUpperCase()}</small>
      {''}
      <small>{dateNow.toLocaleDateString()}</small>
      {
        isShow && <div>ขณะนี้เวลา:{timeNow}</div>
      }
      {
        isShowDate ? <small>{dateNow.toLocaleDateString()}</small>:<small>{timeNow}</small>
      }
      
     </>
  );
}