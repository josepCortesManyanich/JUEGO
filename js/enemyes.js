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

//this.jumping = true;
//this.jumpInterval = setInterval(() => {
  //  if (this.y === 500 && this.jumping)  {
    //    this.y -= 250;
    //} else if (this.y <= 450) {
      //  this.y += 250;
        //this.jumping = false;
        //clearInterval(this.jumpInterval);
    //}
//}, 100)