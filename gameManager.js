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
}