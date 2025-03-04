const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 1024;
const canvasHeight = 576;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

animate();

function animate(){
    window.requestAnimationFrame(animate);
    handControls()
      ctx.fillStyle = "black"
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    player.update()
}