import * as InterfaceManagment from "./interface"



const playerShipFunctionality = (event, board) => {
    const numberID = event.target.id;
   // const newBoard = board; 
  //  console.log(newBoard)
    const boardElements = document.querySelectorAll('div.player'); 
    boardElements.forEach((element) => {
       
        element.addEventListener('click', function(e){
            coordenatesElection(e, board, numberID);
        }, {once: true})
    })
}


const coordenatesElection = (event, board, numberID) => {
    board.assignShipPosition(Number(numberID), event.target.dataset.x, event.target.dataset.y);

    console.log(board.showSelectedShip(Number(numberID)))


}

/*
const elementSelection = (element, position) => {

}
*/
export {coordenatesElection, playerShipFunctionality}