import * as InterfaceManagment from "./interface"



const assignListenerToBoard = (event, board) => {
    const numberID = Number(event.target.id); 
    const boardElements = document.querySelectorAll('div.player'); 
    boardElements.forEach((element) => {

     element.removeEventListener('click', element.fn)
        element.addEventListener('click', element.fn = function(e){
            assignPositionAndDeleteInteraction(e, board, numberID, boardElements);
        }, {once: true})
    })
}



const assignPositionAndDeleteInteraction = (event, board, numberID) => {
    board.assignShipPosition(numberID, Number(event.target.dataset.x), Number(event.target.dataset.y));
    InterfaceManagment.deleteBoardInteraction();
}


export { assignListenerToBoard }