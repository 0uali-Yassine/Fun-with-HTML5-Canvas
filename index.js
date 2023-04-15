let color = document.querySelector('.color');
let eraser = document.querySelector('.eraser');
let range = document.querySelector('.range');
let rainbow = document.querySelector('.rainbow');
let labelRange = document.querySelector('.labelRange');
let rangeValue;
let colorValue;
 
eraser.addEventListener('click',()=>{
    colorValue = 'black';
});
labelRange.addEventListener('click',()=>{
    range.classList.toggle('hidden');
});
range.addEventListener('input',()=>{
    rangeValue = range.value;
});
color.addEventListener('input',()=>{
    colorValue = color.value;
});

rainbow.addEventListener('click',()=>{
    colorValue = `hsl(${hue},100%,50%)`;
});

let canvas = document.querySelector('#draw');
let ctx = canvas.getContext('2d');
canvas.width = "500";
canvas.height = "500";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return; // stop the function when the mouse not moused Down
    ctx.strokeStyle = colorValue;
    ctx.lineWidth = rangeValue;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX,lastY );
    // go to
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];
    
    hue++;
    if(hue>=360){
        hue = 0;
    }

    // this ⬇️ for the line if you want from less width to bigger width
    // if(ctx.lineWidth >= 50 || ctx.lineWidth < 5 ){
    //     direction = !direction;
    // }

    // if(direction){
    //     ctx.lineWidth++;
    // }else{
    //     ctx.lineWidth--;
    // }
};
canvas.addEventListener('mousedown',(e)=>{
    isDrawing = true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
});
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=> isDrawing = false);
canvas.addEventListener('mouseout',()=> isDrawing = false);




  