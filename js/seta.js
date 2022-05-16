class Seta{
    constructor(width, height) {
        this.x = Math.floor(Math.random() * (950 - 4) + 5);
        this.y = Math.floor(Math.random() * (-100 +61) -60);
        this.width = width;
        this.height = height;
        this.fallInterval = undefined
        this.image = undefined
    
}
    _fallDown(){
        this.fallInterval = setInterval (() => {
            if(this.y >= 600){
                clearInterval(this.fallInterval);
            } else {
              this.y ++
            }
        },1500)
        console.log(`Setas position: ${this.x}, ${this.y}`);
    }
    
    _assignImage(){
        this.image = mushroomArray[Math.random()* mushroomArray.length]
    }



}