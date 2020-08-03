class Form {
    constructor() {
      this.input=createInput("name")
      this.greeting=createElement("h3")
      this.button=createButton("play")
      this.reset=createButton("reset")
    }
    hide(){
      this.input.hide()
      this.greeting.hide()
      this.button.hide()
  
    }
  
    display(){
      //gives title to page.
      var title = createElement('h2')
      title.html("Hurdle Race");
      title.position(displayWidth/2-50,0);
      //textbox to enter the name.
     
      
      this.input.position(displayWidth/2-40,displayHeight/2-80);
      this.button.position(displayWidth/2+30,displayHeight/2);
      this.reset.position(displayWidth-100,20)
      this.reset.mousePressed(()=>{
        player.updateCount(0)
        game.update(0)
      })
  //the click event to store the name in db.
      this.button.mousePressed(()=>{
       this.input.hide();
        this.button.hide();
  
        player.name=this.input.value();
        
        playerCount+=1;
        player.index=playerCount
        //update name in db
        player.update()
        //update playerCount in db.
        player.updateCount(playerCount);
        //to display the hello and name message
        
        this.greeting.html("Hello   " + player.name )
        this.greeting.position(displayWidth/2-70,displayHeight/4)
      });
  
    }
  }
  