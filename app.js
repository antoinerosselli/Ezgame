import * as ezgame from "./ezgame.js"

let game = ezgame.createGame();
let scene = ezgame.createScene("main",500,500);
let rect = ezgame.createRectangle(scene,100,100,"orange",50,50);
let mur = ezgame.createRectangle(scene,200,200,"gray", 100, 100);
ezgame.createText(scene,"test_shot",50,"Arial",160,50);


game.playFunction(update,1);
scene.changeColor("blue");
rect.changeColor("orange");

function update(){
    if (game.isCollision(rect,mur) === true)
    {
        console.log("collision");
    }
    if (game.key == "s"){
        rect.moveRect(rect.x, rect.y + 10);
    }
    if (game.key == "q"){
        rect.moveRect(rect.x - 10, rect.y);
    }
    if (game.key == "d"){
        rect.moveRect(rect.x + 10, rect.y);
    }
    if (game.key == "z"){
        rect.moveRect(rect.x, rect.y - 10);
    }
}

