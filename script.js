const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let letters="01";
let fontSize=16;
let columns;
let drops;

function initMatrix(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
columns=Math.floor(canvas.width/fontSize);
drops=[];
for(let i=0;i<columns;i++){drops[i]=1;}
}

function draw(){
ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="#00ffaa";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){
let text=letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);
if(drops[i]*fontSize>canvas.height&&Math.random()>0.975){drops[i]=0;}
drops[i]++;
}
}

window.addEventListener("resize",initMatrix);
initMatrix();
setInterval(draw,35);

// TITLE EFFECT
const titleText="ZYNTRA STUDIOS";
let index=0;
const title=document.getElementById("mainTitle");

function revealTitle(){
if(index<titleText.length){
title.innerHTML+=titleText[index];
index++;
setTimeout(revealTitle,80);
}
}
revealTitle();