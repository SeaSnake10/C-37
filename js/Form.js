class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButtton("Start")
        this.greeting = createElement("h3")
    }

    hide(){
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("Racing Game");
        title.position(530, 120);

        this.input.position(370, 200);

        this.button.position(370,250);
                
    this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.greeting.html("Hello " + player.name + " Welcome to the Racing Game");
            this.greeting.position(450, 170);
            player.name = this.input.value();
            playerCount+=1;
            player.updateCount(playerCount);
        })
    }
}
