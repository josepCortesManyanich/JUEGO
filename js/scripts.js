window.onload = function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const startPage = document.getElementById('start-page');
  const startButton = document.getElementById('start');

  startButton.onclick = function () {
   
    startPage.style = "display: none";
    canvas.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }

  function fillBack(){
    ctx.fillRect(150,600,150,600);
    console.log(ctx)
  }
 
    }
    
  
