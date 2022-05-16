
class Mario {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.initialY = y;
        this.width = width;
        this.height = height;
        this.initialWidth = width;
        this.initialHeight = height;
        this.jumpInterval = undefined;
        this.jumping = false;
        this.drag = 0.99;
        this.gravity = 0.4;
        this.speed = -11;
        this.onTheGround = true;
        this.jumpInterval = undefined;
        this.floorBackgroundY = 600;
        
    }
 // cuando llega la tope de la derecha quiero que siga avanzando por la derecha.   
    moveRight(){
        this.x = this.x + 25
        if (this.x >= 1000 - this.width){
            this.x = 1000 - this.width;
        }
    }
// cuando llega al tope de la izquierda quiero q se queda alli.
    moveLeft() {
        this.x = this.x -25
        if (this.x <= 0 ) {
            this.x = 0 ;
        }
    }

   jumpFunction(){
    if (this.onTheGround) {           
        this.onTheGround = false;    
        this.jumpInterval = setInterval(() => {
          this.speed += this.gravity; 
          this.speed *= this.drag;    
          this.y += this.speed;     
          this._checkIfOnFloor();     
        }, 40);
      }
   }
   
    _checkIfOnFloor() {
    if (this.y > this.floorBackgroundY - this.height) { 
      clearInterval(this.jumpInterval);
      this.jumpInterval = undefined;
      this.y = this.floorBackgroundY - this.height;     
      this.drag = 0.99;
      this.gravity = 0.4;
      this.speed = -11;
      this.onTheGround = true;
    }
  }

// como solo quiero que suba un nivel pongo condicionales para que cuando vaya a incrementarse mas se quede con el mismo tamaño
    _increase(){
        this.width = this.width + 20;
        this.height = this.height + 20;
        this.y = this.y - 20;
        if (this.width >= this.initialWidth + 20){
            this.width = this.initialWidth + 20;
            this.height = this.initialHeight + 20;
            this.y = this.initialY - 20;
        }
    }


    _decrease(){
     this.width = this.width - 20;
     this.height = this.height - 20;
     this.y = this.y + 20;
        if (this.width <= this.initialWidth - 20){
            this.width = this.initialWidth - 20;
            this.height = this.initialHeight - 20;
            this.y = this.initialY + 20;
        }
     }
        
    


}