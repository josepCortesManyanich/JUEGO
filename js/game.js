class Game{
  constructor(ctx) {
    this.ctx = ctx;
    this.mario = new Mario(150, 500, 100, 100);
    this.intervalGame = undefined;
    this.intervalFall = undefined;
    this.setas = [];
    this.enemyes = [];
    this.javascripts = [];
    this.goldenmushrooms = [];
    this.points= 1;

  }
  

  _drawMario() {
    //this.ctx.fillStyle = 'red';
    //this.ctx.fillRect(this.mario.x, this.mario.y, this.mario.width, this.mario.height);
    this.ctx.drawImage(this.mario.image,0, 0, 63, 86, this.mario.x, this.mario.y, this.mario.width, this.mario.height)
 
    //Intento de funcion de drawMario
    //this.ctx.drawImage(this.mario.initialImage,0, 0, 63, 86, this.mario.x, this.mario.y, this.mario.width, this.mario.height)
    //if(this.mario.moveRight()){
    //  this.ctx.drawImage(this.mario.image,0, 0, 63, 86, this.mario.x, this.mario.y, this.mario.width, this.mario.height)
    //}
  //  else if (this.mario.moveLeft()){
     // this.ctx.drawImage(this.mario.image1,0, 0, 63, 86, this.mario.x, this.mario.y, this.mario.width, this.mario.height)
   // }
   // else if (this.mario.jumpFunction()){
    //  this.ctx.drawImage(this.mario.image2,0, 0, 63, 86, this.mario.x, this.mario.y, this.mario.width, this.mario.height)
   // }
  }
  
  
  
   _drawSetas(){
     this.setas.forEach((elem) => {
       this.ctx.drawImage(elem.image, 0,0,200,200,elem.x, elem.y, elem.width, elem.height);
       elem._fallDown(); 
    })
  }
   _drawEnemyes(){
     this.enemyes.forEach((elem) => {
       //this.ctx.fillStyle = 'orange'
       this.ctx.drawImage(elem.image, 0,0,72,74,elem.x,elem.y, elem.width, elem.height);
       elem._enemyAppears();
     })
   }
   
   _drawJavaScript(){
    this.javascripts.forEach((elem) => {
      console.log(elem);
      this.ctx.drawImage(elem.image, 0,0,200,200,elem.x, elem.y, elem.width, elem.height);
      elem._fallDown(); 
   })
    //this.ctx.drawImage(this.javascript.image,0, 0, 200, 200, this.javascript.x, this.javascript.y, this.javascript.width, this.javascript.height)
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

  _generateJavascripts(){
    const newJavaScript = new JavaScript(60,60);
    this.javascripts.push(newJavaScript);
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

  _generateCollision3(){
    this.javascripts.forEach((javascript) => {
      if (
        (
        
          this.mario.x >= javascript.x && this.mario.x <= javascript.x + javascript.width ||
          this.mario.x + this.mario.width >= javascript.x && this.mario.x + this.mario.width <= javascript.x + javascript.width ||
           javascript.x >= this.mario.x && javascript.x <= this.mario.x + this.mario.width
        ) 
        &&
        (
        
          this.mario.y >= javascript.y && this.mario.y <= javascript.y + javascript.height ||
          this.mario.y + this.mario.height >= javascript.y && this.mario.y + this.mario.height <= javascript.y + javascript.height ||
          javascript.y >= this.mario.y && javascript.y <= this.mario.y + this.mario.height 
        )
      ){
        this.winMode();
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
    //this._drawSetas();
    //this._drawEnemyes();
    //this._drawJavaScript();
    this._score();
    this._generateCollision();
    this._generateCollision2();
    this._generateCollision3();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this.intervalGame = setInterval(() => {
     this._generateSetas();
    },2000)
    this.intervalGame = setInterval(() => {
      this._generateEnemy();
    },4000)
    this.intervalGame = setInterval(() => {
      this._generateJavascripts();
    },10000)
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