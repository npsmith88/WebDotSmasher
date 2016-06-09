var score;
var aWidth;
var aHeight;
var timer;

function detectHit(){
    score += 1;
    scoreLabel.innerHTML = "Score: " + score;
}

function setGameAreaBounds(){
    
if(document.all){
    aWidth = document.body.clientWidth;
    aHeight = document.body.clientHeight;
}else{
    aWidth = innerWidth;
    aHeight = innerHeight;
}

aWidth -= 30;
aHeight -= 95;

document.getElementById("gameArea").style.width = aWidth.toString() + "px";
document.getElementById("gameArea").style.height = aHeight.toString() + "px";

aWidth -= 42;
aHeight -= 42;

score = 0;

moveDot();
}

function moveDot(){
    var x = Math.floor(Math.random()*aWidth);
    var y = Math.floor(Math.random()*aHeight);
    
    if(x<10)
        x = 10;
    if(y<10)
        y = 10;
    
    document.getElementById("dot").style.left = x.toString() + "px";
    document.getElementById("dot").style.top = y.toString() + "px";
    clearTimeout(timer);
    timer = setTimeout("moveDot()",1000);
    
}
