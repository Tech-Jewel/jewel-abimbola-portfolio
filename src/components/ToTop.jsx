import React, { useState, useEffect } from "react";
import { reduce } from "../lib/motion";
const h = React.createElement;

// Floating button: appears only once the visitor has scrolled most of the way down.
export default function ToTop(){
  const [on,setOn]=useState(false);
  useEffect(()=>{
    const f=()=>{const m=document.documentElement.scrollHeight-innerHeight;setOn(m>0&&scrollY/m>.72)};
    f();addEventListener("scroll",f,{passive:true});addEventListener("resize",f);
    return()=>{removeEventListener("scroll",f);removeEventListener("resize",f)};
  },[]);
  return h("button",{className:"totop"+(on?" on":""),"aria-label":"Back to top",tabIndex:on?0:-1,
    onClick:()=>scrollTo({top:0,behavior:reduce?"auto":"smooth"})},
    h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},h("path",{d:"M12 19V5M5 12l7-7 7 7"})));
}
