
class Mario{
    constructor(x,y,width,heigh){
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigh = heigh;
        this.ctx = ctx ;
    }
 // cuando llega la tope de la derecha quiero que siga avanzando por la derecha.   
    moveRight(){
        this.x = x + 25
        if (this.x === 1000){
            this.x = 1000
        }
    }
// cuando llega al tope de la izquierda quiero q se queda alli.
    moveLeft() {
        this.x = x -25
        if (this.x === 0) {
            this.x = 0
        }
    }

    jumpFunction(){
        this.y = y - 30
        this.x = x + 5
        if(this.x === 1000){
            this.x = 1000
        } 
    }
// como solo quiero que suba un nivel pongo condicionales para que cuando vaya a incrementarse mas se quede con el mismo tamaño
    increase(){
        this.width = this.width + 20;
        this.heigh = this.heigh + 20;
        this.y = this.y - 20

        if (this.width >= this.width + 21){
            return this.width
        }else if (this.heigh >= this.heigh + 21){
            return this.heigh
        }
    }

    decrease(){
       
        
    }


}