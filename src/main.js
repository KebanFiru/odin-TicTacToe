const GameBoard = (() =>{
    let gameboard = ["","","","","","","","",""];
    let LineCount = 0;

    const cells = document.getElementsByClassName("Cell");
    const CellArray = Array.from(cells)

    const gameBoard = (index) =>{
        return gameboard[index]
    }

    const render = ()=>{
        gameboard.forEach((element, index)=>{
            switch (element){
                case "X":
                    CellArray[index].textContent = "X";
                    break;
                case "O":
                    CellArray[index].textContent = "O";
                    break;
                default:
                    CellArray[index].textContent = '';
                    break;
            }
            CellArray.forEach((element, index)=>{
                element.addEventListener("click", ()=>{
                    if(gameboard[index] == ''){
                        switch(LineCount){
                            case 0:
                                CellArray[index].textContent = Game.players(LineCount).symbol;
                                gameboard[index] = Game.players(LineCount).symbol;
                                LineCount = 1;
                                winCondutions();
                                break;
                            case 1:
                                CellArray[index].textContent = Game.players(LineCount).symbol;
                                gameboard[index] = Game.players(LineCount).symbol;
                                LineCount = 0;
                                winCondutions();

                                break;
                      
                        }
                    }
                    
                })
            })
        });
    }
    
    

    return {render, gameBoard};
})();

const CreatePlayer = (name, symbol) =>{
    return {name,symbol };
}

const Game = (() => {
    let Players = []

    const players = (index) => {

        return Players[index]
    }

    const start = ()=>{
        Players = [CreatePlayer(document.querySelector("#PlayerOne").value, "X"),
                   CreatePlayer(document.querySelector("#PlayerTwo").value, "O") 
        ]
    }

    GameBoard.render();


    return{start, players}; 
})();

function winCondutions(){
    const condutions = [
        [0,3,6],
        [0,1,2],
        [1,4,7],
        [2,4,6],
        [0,4,8],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ]
        for(let i=0; i< condutions.length; i++){
            const [a,b,c] = condutions[i];
            if(GameBoard.gameBoard(a) && GameBoard.gameBoard(a) === GameBoard.gameBoard(b)&& GameBoard.gameBoard(a) === GameBoard.gameBoard(c)){
                return true;
            }
        }
        return false;
}

const StartButton = document.querySelector(".StartGame");
StartButton.addEventListener("click", () => {
    Game.start();
});