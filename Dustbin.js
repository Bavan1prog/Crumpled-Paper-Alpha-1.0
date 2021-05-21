class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution : 0.8,
            friction: 2,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbingreen.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        stroke("orange");
        fill("red");
        image(this.image,700,640,90,100);
        pop();
    }


}