function startGame (){
gameLoop();
}

var loops = 0;
var peopleVisible = false;

function gameLoop(){
    peopleVisible = !peopleVisible;
    flashCharacter();
    loops++;
    if(loops <　12) {
        setTimeout(gameLoop, 3000);
    }
    else {
        alert("Game Over!") ;
    }   
}

//var count = 0;

///function updateCount(){
   // count = count + 1;
   //document.getElementById("number").innerHTML = count;
   //setTimeout(updateCount, 1000); 
//}


function flashCharacter (){
    var board = document.getElementById("board");
    var classToset = peopleVisible ? "character visible" : "character hidden";
  
    for (var index = 0; index < 6; index++){
        board.children[index].className = classToset;
    }
}