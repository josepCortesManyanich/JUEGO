class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.mario = new Mario(150, 500, 100, 100);
    this.intervalGame = undefined;
    this.intervalFall = undefined;
    this.setas = [];
    this.points = 0;

  }
  

  _drawMario() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.mario.x, this.mario.y, this.mario.width, this.mario.height);
    
  }
  
  
   _drawSetas(){
    this.setas.forEach((elem) => {
       this.ctx.fillStyle = 'purple';
       this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height);
       elem._fallDown(); 
    })
  }


// funcion que me las genera, math random y set Interval
  _generateSetas(){
    const newSeta = new Seta(60,60);
    this.setas.push(newSeta);
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
     window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this.intervalGame = setInterval(() => {
      this._generateSetas();
    },1000)
    this._update();
  }

  gameOver(){

  }
}