import React, { useState, useEffect, useRef } from "react";
import { reduce } from "../lib/motion";
const h = React.createElement;
import Edge from "./Edge";

export default function Footer(){
  const cv=useRef(null);
  useEffect(()=>{
    const c=cv.current,ctx=c.getContext("2d");let W,H,cols,rows,cell,v,tg,ptr={x:-999,y:-999},auto=0,raf=0,vis=false,seen=false,timer;
    const draw=()=>{ctx.clearRect(0,0,W,H);let busy=false;const R=Math.max(90,W*.12);
      for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const k=j*cols+i,t=tg[k];let goal=0;
        if(t){if(reduce||auto)goal=1;else{const dx=i*cell+cell/2-ptr.x,dy=j*cell+cell/2-ptr.y;goal=dx*dx+dy*dy<R*R?1:0}}
        v[k]+=(goal-v[k])*(goal?.18:.08);if(Math.abs(goal-v[k])>.01)busy=true;
        const s=cell*(.34+.5*v[k]),x=i*cell+(cell-s)/2,y=j*cell+(cell-s)/2;
        ctx.fillStyle=v[k]>.03?(t===2?"rgba(217,164,65,":"rgba(198,93,46,")+(.25+.75*v[k]).toFixed(2)+")":"rgba(247,242,233,.13)";
        ctx.fillRect(x,y,s,s)}
      return busy};
    const kick=()=>{if(!raf&&vis)raf=requestAnimationFrame(loop)};
    const loop=()=>{raf=0;if(draw())kick()};
    const build=()=>{const r=c.getBoundingClientRect(),dpr=Math.min(2,devicePixelRatio||1);W=r.width;H=r.height;c.width=W*dpr;c.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
      cell=W<300?9:(W<600?12:16);cols=Math.ceil(W/cell);rows=Math.ceil(H/cell);v=new Float32Array(cols*rows);tg=new Uint8Array(cols*rows);
      const cx=W/2,hr=H*.15,hy=H*.3,bx=H*.36,by=H*.88,byy=H*.42;
      for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const x=i*cell+cell/2,y=j*cell+cell/2;
        tg[j*cols+i]=(x-cx)**2+(y-hy)**2<hr*hr?2:(((x-cx)/bx)**2+((y-by)/byy)**2<1?1:0)}
      if(reduce)for(let k=0;k<v.length;k++)v[k]=tg[k]?1:0;draw()};
    const mv=e=>{const r=c.getBoundingClientRect();ptr.x=e.clientX-r.left;ptr.y=e.clientY-r.top;kick()};
    const lv=()=>{ptr.x=ptr.y=-999;kick()};
    const io=new IntersectionObserver(a=>{vis=a[0].isIntersecting;if(vis){if(!seen&&!reduce){seen=true;auto=1;timer=setTimeout(()=>{auto=0;kick()},2400)}kick()}},{threshold:.3});
    build();io.observe(c);c.addEventListener("pointermove",mv);c.addEventListener("pointerleave",lv);addEventListener("resize",build);
    return()=>{io.disconnect();c.removeEventListener("pointermove",mv);c.removeEventListener("pointerleave",lv);removeEventListener("resize",build);cancelAnimationFrame(raf);clearTimeout(timer)}},[]);
  const LINKS=[["Work","#work"],["Approach","#approach"],["About","#about"],["Contact","#contact"]];
  return h("footer",{className:"ft"},
    h(Edge,{v:"hill",color:"ink"}),
    h("div",{className:"wrap"},
      h("div",{className:"fh"},
        h("div",{className:"fl"},
          h("p",{className:"ftag"},"Before the pixels, there’s a ",h("em",null,"person.")),
          h("p",{className:"mono"},"Move across the pixels")),
        h("canvas",{ref:cv,className:"px","aria-hidden":"true"}),
        h("div",{className:"fnav mono",role:"navigation","aria-label":"Footer"},
          LINKS.map(([t,u])=>h("a",{key:t,href:u},t,h("span",{"aria-hidden":"true"},"→"))))),
      h("div",{className:"fb mono"},h("span",null,"© 2026 Jewel Abimbola"),h("span",null,"Lagos · Nigeria"))));
}
