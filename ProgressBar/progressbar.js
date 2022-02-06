// console.log("S");

const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
let numberOfCircle = circles.length;

//NEXT
next.addEventListener("click",function(){
    currentActive++;

    if(currentActive >numberOfCircle){
        currentActive = numberOfCircle;
    }
    console.log(currentActive)
    uddateCSS();
})

//PREV
prev.addEventListener("click",function(){
    currentActive --;

    if(currentActive < 1){
        currentActive = 1;

    }
    console.log(currentActive)
    uddateCSS();

})

//enable Disable function
function enableDisable(){
    if(currentActive === 1){
        prev.disabled = true;
    }
    else if (currentActive === numberOfCircle){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}


//update css
function uddateCSS(){
    for(var i=0;i<numberOfCircle; i++){
        const  circle = circles[i];
        
        if(i<currentActive){
           circle.classList.add("active");

         }else{
            circle.classList.remove("active");
         }
    }

    const activexyz = document.querySelectorAll(".active");

    //calculate width
    //set progress bar width = formula for that
    const widthxyz = (activexyz.length-1)/(circles.length-1)*100;

    progress.style.width = widthxyz +"%";
    enableDisable();
}
