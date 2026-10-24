import React, { useState, useEffect, useRef } from "react";
const h = React.createElement;
export const Phone=({lines=3,check,cards=1})=>h("div",{className:"phone","aria-hidden":"true"},
  h("div",{className:"ln t"}),check?h("div",{className:"ck"},"✓"):null,
  Array.from({length:cards},(_,i)=>h("div",{className:"cd"+(i?" sm":""),key:i})),
  Array.from({length:lines},(_,i)=>h("div",{className:"ln"+(i%2?" s":""),key:"l"+i})));
export const Soon=()=>h("span",{className:"mono soon"},"Case study coming soon");
