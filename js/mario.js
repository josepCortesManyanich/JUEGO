
class Mario{
    constructor(x,y,width,heigh){
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigh = heigh;
        this.ctx = ctx;
    }
    
    moveRight(){
        this.x = x + 25
        if (this.x === 1000){
            this.x = 1000
        }
    }

    moveLeft() {
        this.x = x -25
        if (this.x === 0) {
            this.x = 0
        }
    }


}