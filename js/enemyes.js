class Enemy {
    constructor(width,height){
        this.x = 1100;
        this.width = width;
        this.height = height;
        this.y = 600 - this.height;
        this.image = bowserArray[Math.floor(Math.random() * bowserArray.length)];
    }

    _enemyAppears(){
        this.fallInterval = setInterval (() => {
            if(this.x < -this.width){
                clearInterval(this.fallInterval);
            } else {
                this.x--;
            }
        },3000)
    }
    
}

