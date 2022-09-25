export class _text{
    
    constructor(text_contain,x,y,scene,size,font){
        this.contain = text_contain;
        this.x = x;
        this.y = y;
        this.color = "white";
        this.size = size;
        this.font = font;
        this.scene = scene;
        this.move;
        this.canva = scene.canva;
        this.context = scene.canva.getContext("2d");
        this.width = this.context.measureText(this.contain).width;
        this.t_update = setInterval(() => this.update(this), 1);
        document.body.appendChild(this.canva);
    }

    update(){
        this.context.fillStyle = this.color;
        this.context.font = this.size + "px " + this.font;
        this.context.fillText(this.contain, this.x, this.y);
    }
    
    moveText(x,y,per_frame){
        clearInterval(this.move);
        if (per_frame != 0){
            this.move = setInterval(() => this.textGoTo(x,y), per_frame);
        }
        else{
            this.context.clearRect(this.x - 5 , this.y - this.size, 10000, this.size + 10);
            this.x = x;
            this.y = y;
            console.log(this.size);
        }
    }

    textGoTo(x,y){  
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
        this.context.clearRect(this.x - 5 , this.y - this.size, 10000, this.size + 10);
        if (this.x == x && this.y == y){
            clearInterval(this.move);
        }
    }

    changeFont(size,font){
        this.size = size;
        this.font = font;
    }

    changeColor(color){
        this.color = color;
    }

    changeText(text_contain){
        this.context.clearRect(this.x - 5 , this.y - this.size, 10000, this.size + 10);
        this.contain = text_contain;
    }

    deleteText(){ 
        clearInterval(this.t_update);
        this.context.clearRect(0, 0, 3000, 3000);
    }
}