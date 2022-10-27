
let started = false;
let timeHours = 0;
let timeMinutes = 59;
let timeSeconds = 55;

async function start(){
    if(!started){
        started = true;
        while(started){
            await new Promise(r => setTimeout(r, 1000));
            timeSeconds++;
            if(timeSeconds==60){
                timeSeconds = 0;
                timeMinutes++;
            }
            if(timeMinutes==60){
                timeMinutes = 0;
                timeHours++;
            }
            if(timeHours<10)
                if(timeMinutes<10)
                    if(timeSeconds<10)
                        document.getElementById("textWatch").innerHTML = "0" + timeHours + ":0" + timeMinutes + ":0" + timeSeconds;
                    else
                        document.getElementById("textWatch").innerHTML = "0" + timeHours + ":0" + timeMinutes + ":" + timeSeconds;
                else
                    if(timeSeconds<10)
                        document.getElementById("textWatch").innerHTML = "0" + timeHours + ":" + timeMinutes + ":0" + timeSeconds;
                    else
                        document.getElementById("textWatch").innerHTML = "0" + timeHours + ":" + timeMinutes + ":" + timeSeconds;
            else
                if(timeMinutes<10)
                    if(timeSeconds<10)
                        document.getElementById("textWatch").innerHTML = "" + timeHours + ":0" + timeMinutes + ":0" + timeSeconds;
                    else
                        document.getElementById("textWatch").innerHTML = "" + timeHours + ":0" + timeMinutes + ":" + timeSeconds;
                else
                    if(timeSeconds<10)
                        document.getElementById("textWatch").innerHTML = "" + timeHours + ":" + timeMinutes + ":0" + timeSeconds;
                    else
                        document.getElementById("textWatch").innerHTML = "" + timeHours + ":" + timeMinutes + ":" + timeSeconds;
        }
    }
}