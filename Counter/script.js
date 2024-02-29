const I =document.getElementById("increaseBtn");
const D =document.getElementById("decreaseBtn");
const R =document.getElementById("resetBtn");
const C =document.getElementById("counter");

let count =0;

I.onclick=function(){
    count++;
    C.textContent=count;
};
D.onclick=function(){
    count--;
    C.textContent=count;
};
R.onclick=function(){
    count=0;
    C.textContent=count;
};
