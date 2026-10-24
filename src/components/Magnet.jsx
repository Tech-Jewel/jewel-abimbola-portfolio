import React, { useState, useEffect, useRef } from "react";
import { reduce } from "../lib/motion";
const h = React.createElement;
export default function Magnet({href,className,children}){
  const r=useRef(null);
  const mv=e=>{if(reduce)return;const b=r.current.getBoundingClientRect();
    r.current.style.transform=`translate(${(e.clientX-b.left-b.width/2)*.18}px,${(e.clientY-b.top-b.height/2)*.28}px)`};
  return h("a",{ref:r,href,className:"btn "+className,onMouseMove:mv,onMouseLeave:()=>r.current.style.transform=""},children,h("span",{className:"ar","aria-hidden":"true"},"→"));
}
