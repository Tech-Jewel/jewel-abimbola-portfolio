import React, { useState, useEffect, useRef } from "react";
const h = React.createElement;
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Approach from "./components/Approach";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";

export default function App(){
  const [light,setLight]=useState(false);
  useEffect(()=>{
    const bar=document.getElementById("bar");let t=0;
    const f=()=>{t=0;const m=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${m>0?scrollY/m:0})`;
      const dark=[...document.querySelectorAll("#top,.ft")].some(e=>{const b=e.getBoundingClientRect();return b.top<=40&&b.bottom>40});setLight(!dark)};
    const on=()=>{if(!t)t=requestAnimationFrame(f)};f();addEventListener("scroll",on,{passive:true});return()=>removeEventListener("scroll",on)},[]);
  return h(React.Fragment,null,h(Nav,{light}),h("main",null,h(Hero),h(Work),h(Approach),h(About),h(Contact)),h(Footer),h(ToTop));
}
