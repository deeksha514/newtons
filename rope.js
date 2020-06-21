class Rope{
   constructor (body1,body2,offsetX,offsetY)
{
    this.offsetX=offsetX;
    this.offsetY=offsetY;
    var options={
        bodyA:body1,
        bodyB:body2,
        PointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope=Constraint.create(options);
    World.add(world,this.rope);
}
display(){
     var PointA=this.rope.bodyA.position;
    var PointB=this.rope.bodyB.position;

    strokeWeight(2);
    stroke(210,102,109);
    var Anchor1X=PointA.x;
    var Anchor1Y=PointA.y;

    var Anchor2X=PointB.x+this.offsetX;
    var Anchor2Y=PointB.y+this.offsetY;
    line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

}}