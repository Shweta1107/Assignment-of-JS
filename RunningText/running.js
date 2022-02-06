const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "We love Programming!"
let index =1;

const NUM = 500;
let time = NUM/speedEl.value;

writeText();

function writeText(){
    textEl.innerHTML = text.slice(0,index);
    index++;

    if(index > text.length){
        index = 1;
    }

    setTimeout(writeText , time)
}

speedEl.addEventListener("input",(e)=>{
    time = NUM/e.target.value;
})