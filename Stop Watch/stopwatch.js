const stopwatch = document.getElementById("display");

const playButton = document.getElementById("playButton")
const pauseButton = document.getElementById("pauseButton")
const resetButton = document.getElementById("resetButton")

var hr = 0;
var min =0;
var sec= 0;

var ms = 0;

var timeStopped = true;

function startStopwatch(){
    if(timeStopped){
        timeStopped = false;
        setTimeout(stopwatchCycle , 1000);
        showButton("PAUSE");
    }
}

function stopwatchCycle(){
    if(timeStopped === false){ //means running
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec+=1;

        if(sec === 60){
            min+=1;
            sec=0;
        }
        if(min === 60){
            hr+= 1;
            min =0;
            sec = 0;
        }

        if(sec<10){
            sec = "0"+sec;
        }
        if(min<10){
            min = "0"+min;
        }
        if(hr<10){
            hr = "0"+hr;
        }

        stopwatch.innerHTML = `${hr}:${min}:${sec}`;

        setTimeout(stopwatchCycle , 1000) //in every 1sec this function will run
    }
}

function stopStopwatch(){
    if(timeStopped === false){
        timeStopped = true;
        showButton("PLAY")
    }
}

function resetStopwatch(){
    stopwatch.innerHTML = `00:00:00`;
    timeStopped = true;
    hr =0;
    min =0;
    sec=0;
    showButton("PLAY");
}

function showButton(buttonKey){
    if(buttonKey === 'PLAY'){
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';

    }else{
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    }
}
playButton.addEventListener("click",startStopwatch)
pauseButton.addEventListener("click",stopStopwatch)
resetButton.addEventListener("click",resetStopwatch)