class JavaScript{
  constructor(width, height) {
    this.x = Math.floor(Math.random() * (950 - 4) + 5);
    this.y = Math.floor(Math.random() * (-100 +61) -60);
    this.width = width;
    this.height = height;
    this.fallInterval = undefined;
    this.image = javaScript1;

}
_fallDown(){
    this.fallInterval = setInterval (() => {
        if(this.y >= 600){
            clearInterval(this.fallInterval);
        } else {
          this.y ++
        }
    },5000)
    
}

}