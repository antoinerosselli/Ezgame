import * as ezgame from "./ezgame.js"

let game = ezgame.createGame();
let scene = ezgame.createScene("main",500,500);
let text = ezgame.createText(scene,"olake",30,"Arial",50,50);
let rect = ezgame.createRectangle(scene,50,50,"white",50,50)
let moki = ezgame.createText(scene,"shesh",30,"Arial",300,300);
scene.changeColor("blue");
ezgame.createText(scene,"X",50,"Arial",200,200);
game.playFunction(update,1);
rect.changeColor("orange");

function update(){
    if (game.key == "t"){
        text.moveText(200, 200, 1);
        moki.moveText(333,233,1);
    }
    if (game.key == "j"){
        text.moveText(100, 100, 1);
        moki.moveText(200,200,1);
    }
    if (game.key == "s"){
        rect.moveRect(rect.x, rect.y + 10);
    }

    if (game.key == "a"){
        rect.moveRect(rect.x, rect.y - 10);
    }
}

