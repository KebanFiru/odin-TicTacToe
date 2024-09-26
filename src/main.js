const GameBoard = (() =>{
    let gameboard = ["","","","","","","","",""];
    let LineCount = 0;

    const cells = document.getElementsByClassName("Cell");
    const CellArray = Array.from(cells)

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
                    switch(LineCount){
                        case 0:
                            CellArray[index].textContent = Game.players(LineCount).symbol;
                            LineCount = 1;
                            break;
                        case 1:
                            CellArray[index].textContent = Game.players(LineCount).symbol;
                            LineCount = 0;
                            break;
                    }
                })
            })
        });
    }

    return {render};
})();

const CreatePlayer = (name, symbol) =>{
    return {name,symbol };
}

const Game = (() => {
    let Players = []

    const start = ()=>{
        Players = [CreatePlayer(document.querySelector("#PlayerOne").value, "X"),
                   CreatePlayer(document.querySelector("#PlayerTwo").value, "O")
        ]

    }
    const players = (index) => {

        return Players[index];
    };

    GameBoard.render();

    return{start, players}; 
})();

const StartButton = document.querySelector(".StartGame");
StartButton.addEventListener("click", () => {
    Game.start();
});