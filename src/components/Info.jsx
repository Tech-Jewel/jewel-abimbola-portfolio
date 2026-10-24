import React, { useState, useEffect, useRef } from "react";
const h = React.createElement;
const Info=({n,name,cat,desc,onOpen})=>h("div",{className:"info"},h("span",{className:"mono"},cat),h("h3",null,name),h("p",{className:"d"},desc),h("button",{className:"vc mono",onClick:onOpen},"View case study",h("span",{"aria-hidden":"true"},"→")));
export default Info;
