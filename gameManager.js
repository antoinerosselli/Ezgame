export class _game  {
    constructor(){
        this.key;
        this.doc = document.querySelector("body");
        this.doc.addEventListener('keydown',(key) => {
            this.key = key.key
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
    }

    isCollision(objectA,objectB)
    {
        if(objectA.x + objectA.x_size < objectB.x + objectB.x_size && objectA.x + objectA.x_size > objectB.x || objectA.x < objectB.x + objectB.x_size && objectA.x + objectA.x_size > objectB.x){
            if(objectA.y + objectA.y_size < objectB.y + objectB.y_size && objectA.y + objectA.y_size > objectB.y || objectA.y < objectB.y + objectB.y_size && objectA.y + objectA.y_size > objectB.y){
                return true;
            }    
        }

        return false
    }
}