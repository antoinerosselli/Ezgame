export class _game  {
    constructor(){
        this.key;
        this.click;
        this.doc = document.querySelector("body");
        this.doc.addEventListener('keydown',(key) => {
            this.key = key.key
        });          
        this.doc.addEventListener('click', (click) => {
            this.click = click;
        });
         
    }   
    getKey(){
        return this.key;
    }
    playFunction(update,per_frame)
    {
        setInterval(() => update(), per_frame);
        setInterval(() => this.key_reset(), 1);
    }
    key_reset()
    {
        this.key = undefined;
        this.click = undefined;
    }

    collision_ObjectObject(objectA,objectB)
    {
        if(objectA.x + objectA.x_size < objectB.x + objectB.x_size && objectA.x + objectA.x_size > objectB.x || objectA.x < objectB.x + objectB.x_size && objectA.x + objectA.x_size > objectB.x){
            if(objectA.y + objectA.y_size < objectB.y + objectB.y_size && objectA.y + objectA.y_size > objectB.y || objectA.y < objectB.y + objectB.y_size && objectA.y + objectA.y_size > objectB.y){
                return true;
            }    
        }
        return false
    }

    collision_ClickObject(click,object)
    {
        if (click != undefined){
            if(click.clientX < object.x + object.x_size && click.clientX > object.x && click.clientY < object.y + object.y_size && click.clientY > object.y){
                return true;
            }
        }
        return false;
    }
}