export class _scene
{
    constructor(name,width,height){
        this.name = name;
        this.canva = document.createElement("canvas");
        this.canva.width = width;
        this.canva.height = height;
    }
    deleteScene(){
        delete this.canva;
    }
}