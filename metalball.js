class Block{
 constructor(x,y,width,height,bool){
     var options = {
        'restitution':1.1,
        'friction':0.5,
        'density':1.0,
        'isStatic':bool
        }            
        this.body = Bodies.rectangle(x,y,width,height,options); 
        this.height = height;
        this.width = width; 
         World.add(world, this.body);
     
 }  
    display(){
        if (this.body !== null){
      rectMode(CENTER);
      fill("white");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
        }
      }
}