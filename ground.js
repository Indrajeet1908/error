class Ground
{
  constructor(x, y, w, h,)
    {
       let options = {
           isStactic:true
       };

       this.body = Bodies.rectangle(x, y, w, h, options);
       this.w = w;
       this.h = h;
       World.add(world, this.body);

    }

    Show()
    {
       var pos = this.body.position;
       push();
       rectmode(CENTER);
       stroke(255);
       fill(127);
       rect(pos.x, pos.y, this.w, this.h);
       Pop();
    }
}