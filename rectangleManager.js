export class _rectangle  {
    constructor(scene,x,y,color,x_size,y_size){
        this.x = x;
        this.y = y;
        this.color = color;
        this.x_size = x_size;
        this.y_size = y_size;
        this.canva = scene.canva;
        document.body.appendChild(this.canva);
        this.context = scene.canva.getContext("2d");
        this.context.fillRect(this.x, this.y, this.x_size, this.y_size);
        this.t_update = setInterval(() => this.update(this), 1);
    }

    update()
    {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.x_size, this.y_size);
    }

    moveRect(x,y){
        this.context.clearRect(this.x, this.y, this.x_size, this.y_size);
        this.x = x;
        this.y = y;
        this.context.fillRect(this.x, this.y, this.x_size, this.y_size);
    }

    changeColor(color)
    {
        this.color = color;
    }
    
}