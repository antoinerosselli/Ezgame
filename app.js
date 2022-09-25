import * as ezgame from "./ezgame.js"

let game = ezgame.createGame();
let scene = ezgame.createScene("main",500,500);
let rect = ezgame.createRectangle(scene,100,100,"orange",50,50);
let text = ezgame.createText(scene,"press t for start",50,"Arial",160,50);
let mur = ezgame.createRectangle(scene,300,300,"red",50,100);

game.playFunction(update,1);
scene.changeColor("blue");
var score = 0;
var i = 1;

function update(){
    
    if (game.key == "t")
    {
        rect.moveRect(300,300,70);
        text.changeText("score = " + score);
    }

    if (game.collision_ObjectObject(rect,mur) == true)
    {
        if (i == 1){
            rect.moveRect(100,100,70);
            i = 2;
        }
    }
    if (game.collision_ClickObject(game.click,rect))
    {
        score += 1;
        text.changeText("score = " + score);
    }
}

