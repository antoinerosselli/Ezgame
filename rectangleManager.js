export class _rectangle  {
    constructor(scene,x,y,color,x_size,y_size){
        this.x = x;
        this.y = y;
        this.move = 0;
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

    moveRect(x,y,per_frame){
        clearInterval(this.move);
        if (per_frame != 0){
            this.move = setInterval(() => this.rectGoTo(x,y), per_frame);
        }
        else{
            this.context.clearRect(this.x, this.y, this.x_size, this.y_size);
            this.x = x;
            this.y = y;
            this.context.fillRect(this.x, this.y, this.x_size, this.y_size);
        }
    }

    rectGoTo(x,y){
        this.context.clearRect(this.x, this.y, this.x_size, this.y_size);
        if (this.x < x){
            this.x += 1;
        }
        if (this.x > x){
            this.x -= 1;
        }
        if (this.y < y){
            this.y += 1;
        }
        if (this.y > y){
            this.y -= 1;
        }
        if (this.x == x && this.y == y){
            clearInterval(this.move);
        }
    }

    changeColor(color)
    {
        this.color = color;
    }

}