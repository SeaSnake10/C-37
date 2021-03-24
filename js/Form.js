class Form{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Racing Game");
        title.position(530, 120);

        var input = createInput("Name");
        input.position(370, 200);

        var button = createButton("Start");
        button.position(370,250);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            var greeting = createElement("h3");
            greeting.html("Hello " + name + " Welcome to the Racing Game");
            greeting.position(450, 170);
        })
    }
}