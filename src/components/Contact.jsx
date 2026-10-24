import React from "react";
const h = React.createElement;
import { CONTACT } from "../data/content";
import Reveal from "./Reveal";
import Edge from "./Edge";
import { reduce } from "../lib/motion";

const MQ=["Let’s talk","Say hello","Product design","UX research","Interaction design","Open to collaborate"];

const WA="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";
const BE="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.669 1.484.443.635.769 1.347.961 2.1.2.797.263 1.621.187 2.439h-7.711c-.04.867.211 1.724.715 2.431zm3.319-5.538a2.13 2.13 0 0 0-1.64-.6 2.362 2.362 0 0 0-1.124.248c-.297.152-.558.364-.766.623a2.35 2.35 0 0 0-.419.8c-.07.26-.117.526-.14.795h4.756c-.103-.86-.357-1.488-.667-1.866zm-4.341-4.075h5.996V5.829h-5.996v1.485zM7.986 18.9c-.5.121-1.012.19-1.528.2H0V5.067h6.76c.51-.003 1.02.073 1.508.226.447.138.86.363 1.215.66.335.282.601.633.777 1.03.188.447.28.929.27 1.414a3.18 3.18 0 0 1-.456 1.723c-.31.495-.76.883-1.292 1.115.713.17 1.343.587 1.78 1.18.4.612.607 1.33.593 2.06.01.5-.09.995-.295 1.45a3.092 3.092 0 0 1-.85 1.098 3.847 3.847 0 0 1-1.39.696zM3.059 7.75v2.8h2.74c.29.004.578-.037.857-.12.247-.075.47-.213.645-.4.173-.213.265-.482.26-.758a1.54 1.54 0 0 0-.152-.74 1.16 1.16 0 0 0-.436-.45 1.9 1.9 0 0 0-.642-.25c-.26-.05-.526-.07-.79-.067H3.059zM6.4 16.2c.284.003.567-.03.84-.1.256-.065.495-.18.7-.34.2-.17.36-.37.47-.6.12-.27.17-.56.16-.85a1.58 1.58 0 0 0-.2-.89c-.14-.22-.34-.4-.57-.52a2.17 2.17 0 0 0-.7-.22c-.27-.04-.55-.06-.83-.06H3.06v3.58H6.4z";
const FLY="M222 200C196 150 198 78 240 44S340 6 396 26";
const B1="M66 70h98a26 26 0 0 1 26 26v28a26 26 0 0 1-26 26H100l-26 22v-22H66a26 26 0 0 1-26-26V96a26 26 0 0 1 26-26Z";
const B2="M276 96h98a26 26 0 0 1 26 26v24a26 26 0 0 1-26 26h-8v22l-28-22h-62a26 26 0 0 1-26-26v-24a26 26 0 0 1 26-26Z";
const BURST=(()=>{let d="";for(let i=0;i<24;i++){const a=Math.PI*2*i/24-Math.PI/2,r=i%2?34:44;d+=(i?"L":"M")+(r*Math.cos(a)).toFixed(1)+" "+(r*Math.sin(a)).toFixed(1)}return d+"Z"})();
const INK="#241D19";

// Illustration: two chat bubbles, an envelope and a paper plane taking off.
function Art(){
  const star=(x,y,s,d)=>h("g",{key:x+"-"+y,transform:"translate("+x+" "+y+") scale("+s+")"},
    h("path",{className:"tw",style:{animationDelay:d+"s"},d:"M0-10Q0 0 10 0Q0 0 0 10Q0 0-10 0Q0 0 0-10Z",fill:INK}));
  return h("svg",{className:"cart",viewBox:"0 0 440 370","aria-hidden":"true"},
    h("g",{className:"fl3"},h("path",{d:"M60 190C60 100 140 40 230 48S395 110 392 200 320 350 225 350 60 290 60 190Z",fill:"#DCE0CF"})),
    h("circle",{className:"fl1",cx:36,cy:252,r:11,fill:"#C65D2E",stroke:INK,strokeWidth:3}),
    h("circle",{className:"fl2",cx:412,cy:70,r:8,fill:INK}),
    star(92,28,1.1,0),star(410,150,.9,.8),star(34,196,.8,1.6),star(262,14,.8,.4),
    // envelope
    h("rect",{x:128,y:208,width:200,height:130,rx:14,fill:INK}),
    h("rect",{x:120,y:200,width:200,height:130,rx:14,fill:"#FFFBF4",stroke:INK,strokeWidth:3}),
    h("path",{d:"M122 214L220 282L318 214",fill:"none",stroke:INK,strokeWidth:3,strokeLinejoin:"round"}),
    h("path",{d:"M124 326L194 262M316 326L246 262",stroke:INK,strokeWidth:2.5,strokeLinecap:"round",opacity:.45}),
    // paper plane + trail
    h("path",{d:FLY,fill:"none",stroke:INK,strokeWidth:2,strokeDasharray:"2 9",strokeLinecap:"round",opacity:.55}),
    h("g",reduce?{transform:"translate(330 20) rotate(-12)"}:null,
      h("path",{d:"M-15-9L17 0L-15 9L-9 0Z",fill:"#C65D2E",stroke:INK,strokeWidth:2.5,strokeLinejoin:"round"}),
      h("path",{d:"M-9 0H17",stroke:INK,strokeWidth:2}),
      reduce?null:h("animateMotion",{dur:"5.5s",repeatCount:"indefinite",rotate:"auto",path:FLY}),
      reduce?null:h("animate",{attributeName:"opacity",values:"0;1;1;0",keyTimes:"0;.12;.85;1",dur:"5.5s",repeatCount:"indefinite"})),
    // bubble 1: typing
    h("g",{className:"fl1"},
      h("path",{d:B1,transform:"translate(6 6)",fill:INK}),
      h("path",{d:B1,fill:"#C65D2E",stroke:INK,strokeWidth:3,strokeLinejoin:"round"}),
      [85,115,145].map((x,i)=>h("circle",{key:x,className:"dotb",style:{animationDelay:i*.18+"s"},cx:x,cy:110,r:7,fill:"#FFF8EF"}))),
    // bubble 2: message
    h("g",{className:"fl2"},
      h("path",{d:B2,transform:"translate(6 6)",fill:INK}),
      h("path",{d:B2,fill:"#D9A441",stroke:INK,strokeWidth:3,strokeLinejoin:"round"}),
      h("rect",{x:272,y:118,width:104,height:9,rx:4.5,fill:INK}),
      h("rect",{x:272,y:138,width:66,height:9,rx:4.5,fill:INK})),
    // hello burst
    h("g",{transform:"translate(352 292)"},
      h("g",{className:"spin2"},h("path",{d:BURST,fill:"#D9A441",stroke:INK,strokeWidth:3,strokeLinejoin:"round"})),
      h("text",{x:0,y:7,textAnchor:"middle",fill:INK,style:{font:"700 20px Space Grotesk,Arial,sans-serif"}},"HI!")));
}

export default function Contact(){
  const sv=(f,...c)=>h("svg",{viewBox:"0 0 24 24",fill:f?"currentColor":"none",stroke:f?"none":"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},...c);
  const sc=(k,p)=>h("g",{transform:"translate(12 12) scale("+k+") translate(-12 -12)"},p);
  const IC={
    email:sv(0,h("rect",{x:3,y:5,width:18,height:14,rx:2}),h("path",{d:"m3 7 9 6 9-6"})),
    w:sv(1,sc(.88,h("path",{d:WA}))),
    l:sv(1,h("path",{d:"M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"})),
    b:sv(1,sc(.9,h("path",{d:BE})))
  };
  const arrow=h("span",{className:"go","aria-hidden":"true"},"↗");
  const L=(k,u,t)=>u
    ? h("a",{className:"mono",href:k==="email"?"mailto:"+u:u,target:k==="email"?undefined:"_blank",rel:"noopener noreferrer"},IC[k],t,arrow)
    : h("span",{className:"mono pend"},IC[k],t,arrow);
  return h("section",{className:"ct",id:"contact"},
    h(Edge,{v:"scallop",color:"sand",drift:1}),
    h("div",{className:"wrap cgrid"},
      h(Reveal,{className:"cl"},
        h("span",{className:"mono",style:{color:"var(--tangerine)"}},"Contact"),
        h("h2",null,"Let’s make things that feel ",h("em",null,"right.")),
        h("p",{className:"lead"},"If you’d like to talk about a product idea, a design opportunity, or a thoughtful collaboration, I’d love to hear from you."),
        h("div",{className:"links"},L("email",CONTACT.email,"Email"),L("w",CONTACT.whatsapp,"WhatsApp"),L("l",CONTACT.linkedin,"LinkedIn"),L("b",CONTACT.behance,"Behance"))),
      h(Reveal,{className:"cr",delay:150},h(Art))),
    h("div",{className:"mqw","aria-hidden":"true"},
      h("div",{className:"mq"},h("div",{className:"mqt"},
        [0,1,2].map(n=>h("div",{className:"mqg",key:n},MQ.map(t=>h("span",{key:t},t,h("i",null,"✦")))))))));
}
