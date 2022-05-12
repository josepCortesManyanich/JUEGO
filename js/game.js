class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.mario = new Mario(150, 500, 100, 100);
    this.intervalGame = undefined;
    this.intervalFall = undefined;
    this.setas = [];
    this.enemyes = [];
    this.points= 0;

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
   _drawEnemyes(){
     this.enemyes.forEach((elem) => {
       this.ctx.fillStyle = 'orange'
       this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height);
       elem._enemyAppears();
     })
   }

   _generateEnemy(){
     const newEnemy = new Enemy(100, 100)
     this.enemyes.push(newEnemy);
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

  _generateCollision(){
    this.setas.forEach((seta) => {
      if (
        (
        
          this.mario.x >= seta.x && this.mario.x <= seta.x + seta.width ||
          this.mario.x + this.mario.width >= seta.x && this.mario.x + this.mario.width <= seta.x + seta.width ||
           seta.x >= this.mario.x && seta.x <= this.mario.x + this.mario.width
        ) 
        &&
        (
        
          this.mario.y >= seta.y && this.mario.y <= seta.y + seta.height ||
          this.mario.y + this.mario.height >= seta.y && this.mario.y + this.mario.height <= seta.y + seta.height ||
          seta.y >= this.mario.y && seta.y <= this.mario.y + this.mario.height 
        )           
      ) {
        this.mario._increase();
        this.points ++;
        let index = this.setas.indexOf(seta)
        this.setas.splice(index,1)
      }
    })

  }

 // _generateCollision2() {
 //   this.enemyes.forEach
  //}

  _score() {
  this.ctx.fillStyle = 'purple';
  this.ctx.font = "30px Arial";
  this.ctx.fillText (`Points ${this.points}`, 750 , 100);
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this._drawMario();
    this._drawSetas();
    this._generateCollision();
    this._drawEnemyes();
    this._score();
     window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this.intervalGame = setInterval(() => {
     this._generateSetas();
    },5000)
    this.intervalGame = setInterval(() => {
      this._generateEnemy();
    },1000)
    this._update();
  }

  gameOver(){

  }
}