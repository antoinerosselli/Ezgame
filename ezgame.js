import { _scene } from "./sceneManager.js";
import { _text } from "./textManager.js";

export function createText(scene,text_contain,size,font,x,y)
{
    let text = new _text(text_contain,x,y,scene,size,font);
    return text;
}

export function createScene(name,width,height)
{
   let scene = new _scene(name,width,height);
    return(scene);
}