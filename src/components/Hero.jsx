import React, { useState, useEffect, useRef } from "react";
import { reduce } from "../lib/motion";
const h = React.createElement;
import Magnet from "./Magnet";

export default function Hero(){
  const art=useRef(null),[time,setTime]=useState("");
  useEffect(()=>{const f=()=>setTime(new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Africa/Lagos"}).format(new Date()));f();const t=setInterval(f,30000);return()=>clearInterval(t)},[]);
  const mv=e=>{if(reduce||!art.current)return;const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
    art.current.querySelectorAll("g.l").forEach((g,i)=>g.style.transform=`translate(${x*(i+1)*-18}px,${y*(i+1)*-18}px)`)};
  const words=[["Before"],["the"],["pixels,"],["there’s"],["a"],["person.",1]];
  return h("header",{className:"hero",id:"top",onMouseMove:mv},
    h("div",{className:"wrap"},
      h("div",null,
        h("p",{className:"mono eyebrow"},h("span",null,"Product Design"),h("span",null,"UX Research"),h("span",null,"Interaction Design")),
        h("h1",{"aria-label":"Before the pixels, there’s a person."},words.map((w,i)=>h(React.Fragment,{key:i},h(w[1]?"em":"span",{className:"w","aria-hidden":"true"},h("i",{style:{"--i":i}},w[0])),i<5?" ":null))),
        h("p",{className:"intro"},"I like getting to the heart of a problem, asking the questions that matter, and turning what I learn into digital experiences that make sense to the people using them."),
        h("div",{className:"cta"},h(Magnet,{href:"#work",className:"pri"},"Explore my work"),h("a",{className:"btn sec",href:"#approach"},"How I think"))),
      h("div",{className:"art",ref:art,"aria-hidden":"true"},
        h("svg",{viewBox:"0 0 400 400"},
          h("g",{className:"l"},h("path",{d:"M200 40c60-10 110 30 120 90s-20 100-90 120-130-10-140-80S130 50 200 40Z",fill:"none",stroke:"#D9A441",strokeWidth:1,opacity:.5}),h("circle",{cx:80,cy:330,r:7,fill:"#D9A441"})),
          h("g",{className:"l"},h("path",{d:"M110 180c-40 20-60 70-30 110s90 30 100-20-30-110-70-90Z",fill:"#8A927A"})),
          h("g",{className:"l"},h("path",{d:"M150 70c50-30 120-10 120 40s-60 90-110 80-70-90-10-120Z",fill:"#C65D2E"})),
          h("g",{className:"l"},h("path",{d:"M230 190c50-20 100 20 90 80s-70 90-110 60-30-120 20-140Z",fill:"#D9A441"}),h("circle",{cx:175,cy:225,r:9,fill:"none",stroke:"#F7F2E9",opacity:.7}))))),
    h("div",{className:"meta mono"},h("div",{className:"wrap"},h("a",{className:"cue",href:"#work"},"Scroll"),h("span",null,"Lagos · ",time," WAT"))),
    h("svg",{className:"curve",viewBox:"0 0 1440 100",preserveAspectRatio:"none","aria-hidden":"true"},h("path",{d:"M0 100V60C300 -10 1100 -10 1440 60V100Z",fill:"var(--bg)"})));
}
