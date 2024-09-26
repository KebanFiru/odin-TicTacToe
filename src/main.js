const WinnerLabel = document.querySelector(".Winner");

const GameBoard = (() =>{
    let gameboard = ["","","","","","","","",""];
    let LineCount = 0;

    const cells = document.getElementsByClassName("Cell");
    const CellArray = Array.from(cells)

    const gameBoard = (index) =>{
        return gameboard[index]
    }

    const render = ()=>{
            CellArray.forEach((element, index)=>{
                element.addEventListener("click", ()=>{
                    if(Game.players(LineCount)){
                        if(gameboard[index] == ''){
                            if(Game.isWinReturn() == false){
                                switch(LineCount){
                                    case 0:
                                        gameboard[index] = Game.players(LineCount).symbol;
                                        CellArray[index].textContent = gameboard[index];
                                        Game.ifWins();
                                        LineCount = 1;
                                        break;
                                    case 1:
                                        gameboard[index] = Game.players(LineCount).symbol;
                                        CellArray[index].textContent = gameboard[index];
                                        Game.ifWins();
                                        LineCount = 0;
                                        break;
                                }
                            }    
                        }
                    }       
                })
            })
    }
    
    const RestartButton = document.querySelector(".RestartGame")
    RestartButton.addEventListener("click", ()=>{
        isWin = false;
        for(let i=0;i<9;i++){
            gameboard[i] = ''
            CellArray[i].textContent = ''
            WinnerLabel.textContent = ''
        }

    })

    return {render, gameBoard};
})();

const CreatePlayer = (name, symbol) =>{
    return {name,symbol };
}

const Game = (() => {
    let isWin = false;
    let Players = []

    const isWinReturn = ()=>{
        return isWin;
    }

    const players = (index) => {
        return Players[index]
    }

    const start = ()=>{
        Players = [CreatePlayer(document.querySelector("#PlayerOne").value, "X"),
                   CreatePlayer(document.querySelector("#PlayerTwo").value, "O") 
        ]
    }
    const ifWins = ()=>{
        if(winCondutions()){
            if(winCondutions() == "X"){
                WinnerLabel.textContent = "Player One won"
                isWin = true;
            }
            else{
                WinnerLabel.textContent = "Player Two won"
                isWin = true;
            }
        }
    }

    

    GameBoard.render();

    return{start, players, ifWins, isWinReturn, isWin}; 
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
                return GameBoard.gameBoard(a);
            }
        }
        return false;
}

const StartButton = document.querySelector(".StartGame");
StartButton.addEventListener("click", () => {
    Game.start();
});


