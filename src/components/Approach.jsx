import React, { useState, useEffect, useRef } from "react";
const h = React.createElement;
import { STAGES } from "../data/content";
import Edge from "./Edge";

const I="#241D19",T="#C65D2E",O="#D9A441",V="#8A927A",W="#F7F2E9";
const pop=(i,o)=>({...o,className:"pop",style:{"--i":i}});
const dr=o=>({...o,className:"dr",pathLength:1,fill:"none"});
const BG=["#EBD6C9","#DDE0CF","#F3E1B6","#F6CDB4","#D8DFCB"];
const QS=["Who is this for, and what is their day really like?","What is the real problem worth solving?","What else could this become?","What’s the quickest way to make it real?","What did we learn, and what changes next?"];
const ALT=["Two people in conversation with speech bubbles and a heart between them","Scattered dots converging on a target","Shapes bursting outward from a central idea","A phone wireframe being assembled with a cursor","A phone with a check mark inside a feedback loop with a magnifier"];
const ART=[
 ()=>h("g",null,h("circle",{cx:110,cy:232,r:32,fill:I}),h("path",{d:"M58 360c0-52 22-86 52-86s52 34 52 86Z",fill:T}),
  h("circle",{cx:290,cy:232,r:32,fill:V}),h("path",{d:"M238 360c0-52 22-86 52-86s52 34 52 86Z",fill:O}),
  h("rect",pop(2,{x:56,y:50,width:150,height:64,rx:32,fill:W,stroke:I,strokeWidth:3})),h("path",pop(3,{d:"M82 82h70M82 96h44",stroke:T,strokeWidth:5,strokeLinecap:"round"})),
  h("rect",pop(4,{x:196,y:126,width:150,height:56,rx:28,fill:I})),h("path",pop(5,{d:"M222 154h76",stroke:W,strokeWidth:5,strokeLinecap:"round"})),
  h("path",pop(6,{d:"M200 268c-18-12-26-22-26-32a13 13 0 0 1 26-5 13 13 0 0 1 26 5c0 10-8 20-26 32Z",fill:T}))),
 ()=>h("g",null,h("circle",{cx:200,cy:200,r:150,fill:"none",stroke:I,strokeOpacity:.25,strokeDasharray:"4 8"}),
  h("circle",dr({cx:200,cy:200,r:92,stroke:I,strokeWidth:3})),h("path",dr({d:"M200 30v52M200 318v52M30 200h52M318 200h52",stroke:I,strokeWidth:3,strokeLinecap:"round"})),
  h("circle",pop(6,{cx:200,cy:200,r:30,fill:T})),
  [[142,150,O,-90,-80],[262,140,V,90,-90],[300,214,I,110,20],[250,282,O,70,100],[148,272,V,-80,90],[112,208,I,-110,10],[200,126,T,0,-110]].map((d,i)=>h("circle",{key:i,className:"dt",style:{"--x":d[3]+"px","--y":d[4]+"px","--i":i},cx:d[0],cy:d[1],r:11,fill:d[2]}))),
 ()=>h("g",null,h("path",dr({d:"M200 200L200 86M200 200L304 140M200 200L312 258M200 200L200 314M200 200L88 262M200 200L90 138",stroke:I,strokeWidth:2})),
  h("circle",pop(0,{cx:200,cy:200,r:32,fill:T})),
  h("circle",pop(1,{cx:200,cy:62,r:24,fill:O})),h("rect",pop(2,{x:290,y:104,width:44,height:44,rx:8,fill:I})),
  h("path",pop(3,{d:"M312 224l30 54h-60Z",fill:V})),h("circle",pop(4,{cx:200,cy:338,r:24,fill:"none",stroke:T,strokeWidth:6})),
  h("rect",pop(5,{x:50,y:246,width:56,height:44,rx:8,fill:W,stroke:I,strokeWidth:3})),h("path",pop(6,{d:"M90 110l24 28-24 28-24-28Z",fill:O}))),
 ()=>h("g",null,h("rect",dr({x:96,y:34,width:208,height:332,rx:8,stroke:I,strokeWidth:2})),
  h("rect",pop(1,{x:140,y:60,width:120,height:250,rx:24,fill:W,stroke:I,strokeWidth:5})),
  h("rect",pop(2,{x:158,y:92,width:60,height:10,rx:5,fill:I})),h("rect",pop(3,{x:158,y:116,width:84,height:56,rx:12,fill:T})),
  h("rect",pop(4,{x:158,y:184,width:38,height:38,rx:10,fill:O})),h("rect",pop(5,{x:204,y:184,width:38,height:38,rx:10,fill:V})),
  h("rect",pop(6,{x:158,y:246,width:84,height:32,rx:16,fill:I})),
  h("path",pop(7,{d:"M262 238v46l13-11 9 20 11-5-9-19h17Z",fill:I,stroke:W,strokeWidth:2}))),
 ()=>h("g",null,h("path",dr({d:"M200 50a150 150 0 1 1-106 44",stroke:T,strokeWidth:5,strokeLinecap:"round"})),h("path",pop(7,{d:"M80 70l34 8-16 28Z",fill:T})),
  h("rect",pop(1,{x:150,y:110,width:100,height:180,rx:20,fill:W,stroke:I,strokeWidth:5})),h("circle",pop(2,{cx:200,cy:190,r:26,fill:V})),
  h("path",pop(3,{d:"M187 190l10 10 20-22",stroke:W,strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",fill:"none"})),h("path",pop(4,{d:"M172 248h56M180 264h40",stroke:I,strokeOpacity:.45,strokeWidth:5,strokeLinecap:"round"})),
  h("circle",pop(5,{cx:292,cy:132,r:28,fill:"none",stroke:I,strokeWidth:5})),h("path",pop(5,{d:"M312 152l24 26",stroke:I,strokeWidth:7,strokeLinecap:"round"})),
  h("rect",pop(6,{x:62,y:276,width:74,height:62,rx:6,fill:O})),h("path",pop(6,{d:"M76 296h46M76 312h30",stroke:I,strokeWidth:4,strokeLinecap:"round"})))
];
export default function Approach(){
  const [a,setA]=useState(0),last=a===4;
  return h("section",{className:"ap",id:"approach"},h(Edge,{v:"wave",color:"sand",drift:1}),h("div",{className:"wrap"},
    h("div",{className:"sh"},h("span",{className:"mono lab"},"02 — Design approach"),h("h2",null,"A way of thinking, not a fixed formula."),h("p",null,"Every project is different. These five ideas guide how I move from people to product.")),
    h("div",{className:"fw"},
      h("div",{className:"cvw"},h("div",{className:"cvm"},h("div",{className:"cv",style:{"--cbg":BG[a]}},
        h("svg",{key:a,viewBox:"0 0 400 400",role:"img","aria-label":ALT[a]},ART[a]()))),
        h("div",{className:"qb",key:"q"+a},h("span",{className:"mono qt"},"Question I ask"),h("span",{className:"qm","aria-hidden":"true"},"?"),
          h("p",null,QS[a].split(" ").map((wd,i)=>h(React.Fragment,{key:i},h("span",{className:"wd",style:{"--i":i}},wd)," "))))),
      h("div",{className:"rt"},
        h("ol",{style:{"--h":((a+1)/5*100)+"%"}},STAGES.map((s,i)=>h("li",{key:s[0],className:"st"+(a===i?" on":"")},
          h("button",{onClick:()=>setA(i),"aria-expanded":a===i},h("span",{className:"mono"},"0"+(i+1)),h("span",{className:"nm"},s[0])),
          h("div",{className:"bx"},h("div",null,h("p",null,s[1])))))),
        h("button",{className:"btn pri",onClick:()=>setA(last?0:a+1)},last?"Start again":"Next stage",h("span",{className:"ar","aria-hidden":"true"},last?"↺":"→"))))));
}
