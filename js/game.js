class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.mario = new Mario(150, 599, 30, 50);
    this.intervalGame = undefined;
    this.intervalFall = undefined;
    this.setas = [];
    this.points = 0;

  }
  

  _drawMario() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.mario.x, this.mario.y, this.mario.width, this.mario.height);
    console.log(this.ctx)
  }

 
  
   _drawSetas(){
    this.setas.forEach(() => {
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.setas.x, this.setas.y, this.setas.width, this.setas.height);
    })
    }


// funcion que me las genera, math random y set Interval
  _generateSetas(){
    const newSetas = new Setas(60,60)
    newSetas._fallDown();
    this.setas.push(newSetas);

  }


  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.mario.moveLeft();
          break;
        case 'ArrowRight':
          this.mario.moveRight();
          break;
        default:
          break;
      }
    });
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this._drawMario();
    this._drawSetas();
    this._assignControls();
     window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }

  gameOver(){

  }
}