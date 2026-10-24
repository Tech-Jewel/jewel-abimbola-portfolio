import React, { useState, useEffect, useRef } from "react";
const h = React.createElement;
import { NAV } from "../data/content";

export default function Nav({light}){
  const [open,setOpen]=useState(false);
  return h("nav",{className:light?"light":""},
    h("a",{className:"logo",href:"#top"},h("b",null,"JA"),"Jewel Abimbola"),
    h("button",{className:"menu mono","aria-expanded":open,onClick:()=>setOpen(!open)},open?"Close":"Menu"),
    h("ul",{className:open?"open":""},NAV.map(t=>h("li",{key:t},h("a",{href:"#"+t.toLowerCase(),onClick:()=>setOpen(false)},t)))));
}
