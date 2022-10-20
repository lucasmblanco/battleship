import * as InterfaceManagment from "./interface"



const panelInteractivity = (event, board) => {
    const boardElements = document.querySelectorAll('div.player'); 
    const numberID = Number(event.target.id); 
    boardElements.forEach((element, index) => {
        element.removeEventListener('click', element.fn)
        element.addEventListener('click', element.fn = function(e){
            const status = assignPositionAndDeleteInteraction(e, board, numberID, boardElements);
            if(status !== 'Not assigned') {
                InterfaceManagment.shipLocationOnBoard(index, event.target.dataset.length);
                InterfaceManagment.deleteBoardInteraction();
            }
            /*
            if(status === 'All ships have been assigned'){
                InterfaceManagment.shipLocationOnBoard(index, event.target.dataset.length);
                InterfaceManagment.deleteBoardInteraction();
                InterfaceManagment.computerBoardInteractivity(); 
            }
            */
            
        })
    })
}



const assignPositionAndDeleteInteraction = (event, board, numberID) => {
    const status = board.assignShipPosition(numberID, Number(event.target.dataset.x), Number(event.target.dataset.y)); 
    return status;  
}


const recievePlayerAttack = (event, player) => {

}


export { panelInteractivity, recievePlayerAttack }