var i = 0;
function timeout(){
    i=i+1;
    postMessage(i);
    srtTimeout("timeCount", 500);
}
timeCount();
