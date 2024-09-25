const GameBoard = (()=>{
    const board = [["","",""],["","",""],["","",""]];
    return {board};
})();

const CreatePlayer = (name,type) => {
    return {name, type};
}

const playerOne = CreatePlayer('Player 1', "X")
const playerTwo = CreatePlayer('Player 2', "O")
