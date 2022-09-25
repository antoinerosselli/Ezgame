export class _generator  {
    constructor(scene,x,y,delay,object){
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.delay = delay;
        this.object = object;
        this.t_update = setInterval(() => this.create(this), delay);
    }
}