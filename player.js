class Player {
    constructor(){
      this.name=null
      this.distance=0
      this.index=null
  
  
    }
  //to get the value of playerCount from db.
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  //to update the playerCount field in db.
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  //to udate the name of particular player.
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    //it is static function independant of all objects.
    static getallplayers(){
      database.ref("players").on("value",function(data){
        allplayers=data.val()
  console.log("in database")
  console.log(allplayers)
      
      })
    }
    
  }
  