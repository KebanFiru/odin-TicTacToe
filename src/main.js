const GameBoard = (() =>{
    let gameboard = ["","","","","","","","",""];

    const cells = document.querySelectorAll(".Cell");

    const render = ()=>{
        gameboard.forEach((element, index)=>{
            switch (element){
                case "X":
                    cells[index].textContent = "X";
                    break;
                case "O":
                    cells[index].textContent = "O";
                    break;
                default:
                    cells[index].textContent = '';
                    break;
            }
        });
    }

    return {render};
})();

const CreatePlayer = (name, symbol) =>{
    return {name,symbol };
}

const Game = (() => {
    const start = ()=>{

        CreatePlayer(document.querySelector(".playerone").textContent, "X");
        CreatePlayer(document.querySelector(".playertwo").textContent, "O");

    }

})();

const StartButton = document.querySelector(".StartGame");
StartButton.addEventListener("click", () => {
});