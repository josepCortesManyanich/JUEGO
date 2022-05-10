
class Mario {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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

   // jumpFunction(){
    //    const jumpMario
        
                

    
   // }
// como solo quiero que suba un nivel pongo condicionales para que cuando vaya a incrementarse mas se quede con el mismo tamaño
    _increase(){
        this.width = this.width + 20;
        this.height = this.height + 20;
        this.y = this.y - 20

        if (this.width >= this.width + 21){
            return this.width
        }else if (this.height >= this.height + 21){
            return this.height
        }
    }

    _jumpFunction(){

    }

    _decrease(){
       
        
    }


}