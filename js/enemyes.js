class Enemyes {
    constructor(x,y,width,height){
        this.x = x;
        this.y = Math.floor(Math.random(600-399)+1);
        this.width = width;
        this.height = height;
    }

    _enemyAppears(){
        this.fallInterval = setInterval (() => {
            if(this.x >= 0){
                clearInterval(this.fallInterval);
            } else {
              this.x ++
            }
        },1500)
        console.log(`Enemy position: ${this.x}, ${this.y}`);
    }
    


}