import{a as s}from"./animation.B4LSwYbi.js";import{r as o,s as c}from"./stagger.DPEHqb4z.js";function m(t){if(!t)return;const r=["#e5007d","#00a3e0","#ffd100","#7000ff","#ff5800"],i=14;t.innerHTML="";for(let e=0;e<i;e++){const a=document.createElement("div");a.className="cmyk-particle";const n=Math.floor(Math.random()*8)+6,l=r[e%r.length];a.style.cssText=`
      position: absolute;
      width: ${n}px;
      height: ${n}px;
      border-radius: 50%;
      background-color: ${l};
      opacity: 0.6;
      pointer-events: none;
      left: ${Math.random()*90}%;
      top: ${Math.random()*90}%;
    `,t.appendChild(a)}s(t.querySelectorAll(".cmyk-particle"),{translateX:()=>o(-35,35),translateY:()=>o(-35,35),scale:[.8,1.5],opacity:[.3,.9],alternate:!0,loop:!0,ease:"easeInOutSine",delay:c(150),duration:()=>o(2500,4500)})}function u(t){s(t,{scale:[1,1.03,1.01],rotate:[0,-1,1,0],duration:700,ease:"outElastic(1, 0.6)"})}export{u as a,m as i};
