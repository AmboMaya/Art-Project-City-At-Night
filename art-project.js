
var canvas = document.querySelector('canvas');
var ctx=canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = 300;

//borrowed drawStar function from http://jsfiddle.net/m1erickson/8j6kdf4o/
function drawStar(cx,cy,spikes,outerRadius,innerRadius, strokeWidth){
    var rot=Math.PI/2*3;
    var x=cx;
    var y=cy;
    var step=Math.PI/spikes;
    var grd = ctx.createRadialGradient(50, 50, 5, 90, 60, 100);
    grd.addColorStop(0,'white');
    grd.addColorStop(1,'#0d1318');
    if(strokeWidth === undefined) {
        strokeWidth = 1;
    }
    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*outerRadius;
        y=cy+Math.sin(rot)*outerRadius;
        ctx.lineTo(x,y)
        rot+=step

        x=cx+Math.cos(rot)*innerRadius;
        y=cy+Math.sin(rot)*innerRadius;
        ctx.lineTo(x,y)
        rot+=step
    }
    ctx.globalAlpha = 0.5;
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();
    ctx.lineWidth=strokeWidth;
    ctx.strokeStyle='#4B79A1';
    ctx.stroke();
    ctx.fillStyle='white';
    ctx.fill();
}

function multiplyStars () {
    for (var i = 0; i < 90; i++) {
        var delay = Math.random() * 12000 + 5000;
        setTimeout(createStar, delay );    
    };
    
}

function createStar() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var outerRadius = (Math.random() * 4) + 3;
    var innerRadius = Math.random() + 1;
    drawStar(x, y, 6, outerRadius, innerRadius, 2);

}
multiplyStars();

var button = document.getElementById('sound');
function togglePlay() {
    return sound.paused ? sound.play() : sound.pause();
}