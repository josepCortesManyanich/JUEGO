
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
    this.jumping = true;
    this.jumpInterval = setInterval(() => {
        if (this.y === 500 && this.jumping) {
            this.y -= 250;
        } else if (this.y <= 450) {
            this.y += 250;
            this.jumping = false;
            clearInterval(this.jumpInterval);
        }
    }, 100)
    
   }
  
// como solo quiero que suba un nivel pongo condicionales para que cuando vaya a incrementarse mas se quede con el mismo tamaño
    _increase(){
        this.width = this.width + 20;
        this.height = this.height + 20;
        this.y = this.y - 20;
        if (this.width >= this.initialWidth + 20){
            this.width = this.initialWidth + 20;
            this.height = this.initialHeight + 20;
            this.y = this.initialY - 20;}
    }

   

    

    _decrease(){
     this.width = this.width - 20;
     this.height = this.height - 20;
     this.y = this.y + 20;
     if(this.width = this.width - 25){

     }
     }
        
    


}