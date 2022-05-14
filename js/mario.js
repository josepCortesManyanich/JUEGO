
class Mario {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.initialY = y;
        this.width = width;
        this.height = height;
        this.initialWidth = width;
        this.initialHeight = height;
        
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
    
    const jumping = () => {
        if(this.y === 600){
            this.y = this.y -10
        } else (this.y <= -550){
            this.y = this.y + 10
        }
    const jumpInterval = setInterval(jumping,10);
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