
class Mario {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.initialY = y;
        this.width = width;
        this.height = height;
        this.initialWidth = width;
        this.initialHeight = height;
        this.initialImage = mario1;
        this.image = marioArrayRight[0];
        this.stepCounter = 1;
        this.jumpInterval = undefined;
        this.jumping = false;
        this.drag = 0.99;
        this.gravity = 0.3;
        this.speed = -15;
        this.onTheGround = true;
        this.jumpInterval = undefined;
        this.floorBackgroundY = 600;
    }
// PLAYER MOVEMENTS
  moveRight() {
    this.x = this.x + 25
    if (this.x >= 1000 - this.width) {
      this.x = 1000 - this.width;
    }
    this.image = marioArrayRight[this.stepCounter];
    this.stepCounter++;
    if (this.stepCounter == marioArrayRight.length) {
      this.image = marioArrayRight[0];
      this.stepCounter = 1;
    }
  }

  moveLeft() {
    this.x = this.x - 25
    if (this.x <= 0) {
      this.x = 0;
    }
    this.image = marioArrayLeft[this.stepCounter];
    this.stepCounter++;
    if (this.stepCounter == marioArrayLeft.length) {
      this.image1 = marioArrayLeft[0];
      this.stepCounter = 1;
    }
  }

  jumpFunction() {
    if (this.onTheGround) {
      this.onTheGround = false;
      this.jumpInterval = setInterval(() => {
        this.speed += this.gravity;
        this.speed *= this.drag;
        this.y += this.speed;
        this._checkIfOnFloor();
      }, 40);
    }
    this.image = marioJump;
  }

  _checkIfOnFloor() {
    if (this.y > this.floorBackgroundY - this.height) { 
      clearInterval(this.jumpInterval);
      this.jumpInterval = undefined;
      this.y = this.floorBackgroundY - this.height;     
      this.drag = 0.99;
      this.gravity = 0.3;
      this.speed = -15;
      this.onTheGround = true;
    }
  }
   
//PLAYER STATES

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
     if (this.width <= this.initialWidth - 20){
        this.width = this.initialWidth - 20;
        this.height = this.initialHeight - 20;
        this.y = this.initialY + 20;
    }        
  }
        
    


}