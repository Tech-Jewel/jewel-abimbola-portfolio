import React from "react";
const h = React.createElement;

// Curved section dividers. "drift" variants slowly slide sideways.
const scallop=(()=>{let d="M0 100V62";for(let i=0;i<24;i++)d+="a60 46 0 0 1 120 0";return d+"V100Z"})();
const EDGES={
  wave:{vb:"0 0 2880 100",d:"M0 50C240 0 480 0 720 50C960 100 1200 100 1440 50C1680 0 1920 0 2160 50C2400 100 2640 100 2880 50V100H0Z"},
  swoop:{vb:"0 0 1440 100",d:"M0 70C240 100 480 100 720 60S1200 -10 1440 40V100H0Z"},
  scallop:{vb:"0 0 2880 100",d:scallop},
  hill:{vb:"0 0 1440 100",d:"M0 100V80C300 80 420 8 720 8S1140 80 1440 80V100Z"}
};
export default function Edge({v,color,drift}){
  const e=EDGES[v];
  return h("div",{className:"edge "+color+(drift?" drift":""),"aria-hidden":"true"},
    h("svg",{viewBox:e.vb,preserveAspectRatio:"none"},h("path",{d:e.d,fill:"currentColor"})));
}
