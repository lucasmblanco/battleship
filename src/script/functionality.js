import * as InterfaceManagment from "./interface"



const assignListenerToBoard = (event, board) => {
    const boardElements = document.querySelectorAll('div.player'); 
    const numberID = Number(event.target.id); 
    boardElements.forEach((element, index) => {
        element.removeEventListener('click', element.fn)
        element.addEventListener('click', element.fn = function(e){
           const positionStatus = assignPositionAndDeleteInteraction(e, board, numberID, boardElements);
            positionStatus ? InterfaceManagment.shipLocationOnBoard(index, event.target.dataset.length) : console.log('FAILED');
        }, {once: true})
    })
}



const assignPositionAndDeleteInteraction = (event, board, numberID) => {
    const assignStatus = board.assignShipPosition(numberID, Number(event.target.dataset.x), Number(event.target.dataset.y));
    assignStatus ? InterfaceManagment.deleteBoardInteraction() : false; 
}

export { assignListenerToBoard }