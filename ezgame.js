import { _scene } from "./sceneManager.js";
import { _text } from "./textManager.js";
import { _game } from "./gameManager.js";
import { _rectangle } from "./rectangleManager.js";
import { _generator } from "./generatorManager.js";

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

export function createGame()
{
    let game = new _game();
    return(game);
}

export function createRectangle(scene,x,y,color,x_size,y_size)
{
    let rectangle = new _rectangle(scene,x,y,color,x_size,y_size);
    return(rectangle);
}

export function createGenerator()
{
    let generator = new _generator(scene,x,y)
    return(generator);
}