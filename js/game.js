class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.mario = new Mario(100, 500, 30, 50);
    this.intervalGame = undefined;
    this.intervalFall = undefined;
    this.setas = [];
    this.points = 0;

  }
  
// funcion que me dibuja a mario, de momento pintamos cuadrados
  _drawMario() {
    this.ctx.fillStyle = 'red';
    // Tienes que usar las propiedades del mario que tienes guardado en this.mario
    this.ctx.fillRect(this.mario.x, this.mario.y, this.mario.width, this.mario.height);
  }

//funcion que me pinta las setas, de momento pintamos cuadrados
  
  // Si dejas cosas a medias puede petar
  // _drawSetas(){
  //   this.ctx.fillStyle = 'grey';
  //   this.ctx.fillRect()
  // }


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

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    // Faltaba llamar esta función aquí para que pinte. He añadido también la del clean
    this._drawMario();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }

  gameOver(){

  }
}