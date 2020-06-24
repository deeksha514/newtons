class Bob{
  constructor(x,y,r){
 
 var options={
 isStatic:false,
 restitution:1,
 density:0.8,
 friction:0
   }

   this.r=r;
   this.y=y;
   this.x=x;
   this.body=Bodies.circle(this.x,this.y,this.r,options);
   World.add(world,this.body);
  }
 
   display(){
       var pos=this.body.position;
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       fill("red");
       ellipse(0,0,this.r,this.r);
       pop();
   }
 };
 
 
   
   