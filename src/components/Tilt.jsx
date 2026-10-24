import React, { useState, useEffect, useRef } from "react";
import { reduce } from "../lib/motion";
const h = React.createElement;
export default function Tilt({className="",children}){
  const r=useRef(null);
  const mv=e=>{if(reduce)return;const b=r.current.getBoundingClientRect();const x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;
    r.current.style.transform=`rotateY(${x*8}deg) rotateX(${-y*8}deg)`};
  const lv=()=>{r.current.style.transform=""};
  return h("div",{className:"stage "+className,onMouseMove:mv,onMouseLeave:lv},h("div",{ref:r,className:"tilt",style:{display:"flex",gap:"inherit",justifyContent:"center"}},children));
}
