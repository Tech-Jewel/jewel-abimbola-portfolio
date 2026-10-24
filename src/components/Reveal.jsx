import React, { useState, useEffect, useRef } from "react";
const h = React.createElement;
export default function Reveal({className="",children,delay=0}){
  const r=useRef(null);
  useEffect(()=>{const e=r.current;if(!("IntersectionObserver" in window)){e.classList.add("in");return}
    const io=new IntersectionObserver(a=>a[0].isIntersecting&&(e.classList.add("in"),io.disconnect()),{threshold:.12});io.observe(e);return()=>io.disconnect()},[]);
  return h("div",{ref:r,className:"rv "+className,style:{transitionDelay:delay+"ms"}},children);
}
