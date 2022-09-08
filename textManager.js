export class _text{
    
    constructor(text_contain,x,y,scene,size,font){
        this.contain = text_contain;
        this.x = x;
        this.y = y;
        this.size = size;
        this.font = font;
        this.scene = scene;
        this.canva = scene.canva;
        this.context = scene.canva.getContext("2d");
        this.t_update = setInterval(() => this.update(this), 1);
    }

    update(){
        this.context.clearRect(0, 0, 3000, 3000);
        this.context.fillText(this.contain, this.x, this.y);
        this.context.font = this.size + "px " + this.font;
        document.body.appendChild(this.canva);
    }
    
    moveText(x,y){
        this.x = x;
        this.y = y;
    }

    changeFont(size,font){
        this.size = size;
        this.font = font;
    }

    changeText(text_contain){
        this.contain = text_contain;
    }

    deleteText(){ 
        clearInterval(this.t_update);
        this.context.clearRect(0, 0, 3000, 3000);
    }
}