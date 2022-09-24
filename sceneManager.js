import { _text } from "./textManager.js"; 

export class _scene
{
    constructor(name,width,height){
        this.name = name;
        this.color = "white";
        this.canva = document.createElement("canvas");
        this.context = this.canva.getContext('2d');
        this.canva.width = width;
        this.canva.height = height;
    }

    getColor(){
        console.log(this.color);
        return this.color;
    }

    isActive(){
        this.canva.style.display = "block";
    }

    isPassive(){
        this.canva.style.display = "none";
    }

    deleteScene(){
        delete this.canva;
    }

    changeColor(color){
        this.color = color;
        this.canva.style.background = color;
    }
}