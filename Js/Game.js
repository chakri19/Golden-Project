class Game{
    constructor(){

    }

    readGameState(){
        database.ref("gameState").on("value",(data)=>{
            gameState=data.val();
        })
    }

    updateGameState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        if (gameState===0){
            form = new Form();
            player = new Player();
            form.display();
            player.readPlayerCount();
        }
    }

    play(){
       var character1 = createSprite(200,370,30,30);
       var character2 = createSprite(600,370,30,30);

       character1.addImage(charImage1);
       character2.addImage(charImage2);

       var characters = [character1,character2];
       
       Player.readPlayerInfo();

       if(allPlayers!=undefined){
           var index = 0;
           var x = 0;
           var y = 0;
           for (var character in allPlayers){
               index+=1;
               y = allPlayers[character].position.y;
               x = allPlayers[character].position.x;
               characters[index-1].x=x;
               characters[index-1].y=y;
               
           }
       }

       if(keyDown("RIGHT")){
           player.x+=10;
           player.updatePlayerInfo();
       }

       if(keyDown("LEFT")){
        player.x+=-10;
        player.updatePlayerInfo();
       }

       if(character1.isTouching(character2)){
            
       }

       drawSprites();
    }
}