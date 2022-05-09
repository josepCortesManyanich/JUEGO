class Game{
  constructor(context) {
    this.ctx = context;
    this.mario = new Mario (0, 600, 200, 250)
    this.intervalGame = null
    this.intervalFall = null
    this.setas = [];
    this.points

  }
// funcion que me dibuja a mario, de momento pintamos cuadrados
  _drawMario(){
    this.ctx.fillStyle ='dark';
    this.ctx.fillRect (0,600,200,250)
  }
//funcion que me pinta las setas, de momento pintamos cuadrados
  _drawSetas(){
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect()


  }
// funcion que me las genera, math random y set Interval
  _generateSetas(){

  }


  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.meatball.moveLeft();
          break;
        case 'ArrowRight':
          this.meatball.moveRight();
          break;
        default:
          break;
      }
    });
  }

  _update() {
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }

  gameOver(){

  }
}