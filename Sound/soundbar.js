// console.log("Sound Bar")\

const btnxyz = Array.from(document.querySelectorAll(".btn"));


//3rd
function stopSound(){
    for(var i=0;i<btnxyz.length;i++){
        const sound = document.getElementById( btnxyz[i].innerText )
        sound.pause();
        sound.currentTime = 0;
    }
}

//2nd
function playSound(btn){
    btn.addEventListener("click",function(){
    stopSound()
    document.getElementById(btn.innerText).play()
    })
}

//1st 
for(var i=0;i<btnxyz.length;i++){
    var buttonxyz = btnxyz[i];
    playSound(buttonxyz);
}

document.querySelector(".stop").addEventListener("click",function(){
    stopSound();
})






