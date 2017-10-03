   var imgTag = new Image();
   var canvas = document.getElementById('icanvas');
   var ctx = canvas.getContext("2d");
   var x = canvas.width;
   var y = 0;

   imgTag.onload = animate;
   imgTag.src = "./images/canvas1.png";  

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
    ctx.drawImage(imgTag, x, y);                       
      x -= 4;
  if (x > 50) requestAnimationFrame(animate)        
    }