window.addEventListener("load", () =>{
   const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

   let painting = false;

   function startPosition(e) {
       painting = true;
       draw(e);
   }
   function finishedPosition(){
       painting = false;
       ctx.beginPath();
   }

   function draw(e){
       if(!painting) return;
       ctx.lineWidth = 20;
       ctx.lineCap = "round";
       ctx.strokeStyle = "black";

       ctx.lineTo(e.clientX, e.clientY);
       ctx.stroke();
       ctx.beginPath();
       ctx.moveTo(e.clientX,e.clientY);
    }

    //Eventlistners
    canvas.addEventListener('mousedown',startPosition);
   canvas.addEventListener("mouseup",finishedPosition);
   canvas.addEventListener("mousemove",draw);
});