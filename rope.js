class Chain 
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
            var options={
                bodyA:bodyA,
                bodyB:bodyB,
                length:250,
                stiffness:0.5
               // pointB:{x:this.offset.X,y:this.offset.Y}

            }
            
            this.chain=Matter.Constraint.create(options);
            World.add(world,this.chain);

     }
display(){
    strokeWeight(5);
             line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
                this.chain.bodyB.position.x,this.chain.bodyB.position.y)
                   
             
}
     
}