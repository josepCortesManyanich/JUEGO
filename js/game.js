class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.mario = new Mario(150, 500, 100, 100);
    this.intervalGame = undefined;
    this.intervalFall = undefined;
    this.setas = [];
    this.enemyes = [];
    this.points= 1;

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
//Generate enemys and droplets
   _generateEnemy(){
     const newEnemy = new Enemy(100, 100)
     this.enemyes.push(newEnemy);
   }



  _generateSetas(){
    const newSeta = new Seta(60,60);
    this.setas.push(newSeta);
  }

// CONTROL ASSIGNS

  _assignControls() {
    
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.mario.moveLeft();
          break;
        case 'ArrowRight':
          this.mario.moveRight();
          break;
        case 'Space':
          this.mario.jumpFunction();
          break;
        default:
          break;
            
      }
    });
  }

  // CHECK THE COLLISIONS

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
        this.points = this.points + 1
        let index = this.setas.indexOf(seta)
        this.setas.splice(index,1)
      }

     if (this.points <= 2){
       this.winMode();
     }

      
    })

  }

  _generateCollision2() {
  this.enemyes.forEach((enemy) => {
    if (
      (
      
        this.mario.x >= enemy.x && this.mario.x <= enemy.x + enemy.width ||
        this.mario.x + this.mario.width >= enemy.x && this.mario.x + this.mario.width <= enemy.x + enemy.width ||
         enemy.x >= this.mario.x && enemy.x <= this.mario.x + this.mario.width
      ) 
      &&
      (
      
        this.mario.y >= enemy.y && this.mario.y <= enemy.y + enemy.height ||
        this.mario.y + this.mario.height >= enemy.y && this.mario.y + this.mario.height <= enemy.y + enemy.height ||
        enemy.y >= this.mario.y && enemy.y <= this.mario.y + this.mario.height 
      )
    ){
      this.mario._decrease();
      this.points = this.points - 1
      let index = this.enemyes.indexOf(enemy)
      this.enemyes.splice(index,1)
    }  
    if(this.points = 0){
     this.gameOver();
    }
    
  })
  }

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
    this._drawEnemyes();
    this._score();
    this._generateCollision();
    this._generateCollision2();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this.intervalGame = setInterval(() => {
     this._generateSetas();
    },2000)
    this.intervalGame = setInterval(() => {
      this._generateEnemy();
    },2000)
    this._update();
  }

  // GAME STATES

  gameOver(){
    this._clean()
    clearInterval(this.intervalFall);
    clearInterval(this.intervalGame);
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
    
  }
  
  winMode(){
    this._clean();
    clearInterval(this.intervalFall);
    clearInterval(this.intervalGame);
    const winPage = document.getElementById('win-page');
    winPage.style = "display:flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
  }
}