class Enemy {
    constructor(width,height){
        this.x = 1100;
        this.width = width;
        this.height = height;
        // this.y = Math.floor(Math.random() * (600 - 300 - this.width) + 300 - this.width);
        this.y = 600 - this.height;
    }

    _enemyAppears(){
        this.fallInterval = setInterval (() => {
            if(this.x < -this.width){
                clearInterval(this.fallInterval);
            } else {
                this.x--;
            }
        },1500)
    }
    
}