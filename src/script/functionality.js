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
                InterfaceManagment.removeShipVisualization(numberID); 
                InterfaceManagment.removeListener();
            }

        })
    })
}



const assignPositionAndDeleteInteraction = (event, board, numberID) => {
    const status = board.assignShipPosition(numberID, Number(event.target.dataset.x), Number(event.target.dataset.y)); 
    return status;  
}


const computerElementsInteractivity = (event, playerBoard, player, computerBoard, computer, playerBoardContainer, computerBoardContainer) => { 
    if(!playerBoard.statusOfShips()){
        const playerAttackStatus = player.attackEnemyBoard(computerBoard,Number(event.target.dataset.x), Number(event.target.dataset.y));
        const computerCoord = computer.generateRandomCoordenates(); 
        const computerAttackStatus = computer.attackEnemyBoard(playerBoard, computerCoord.positionX, computerCoord.positionY);

        InterfaceManagment.hitIndication(event.target, playerAttackStatus);
        InterfaceManagment.matchStatus(player, computerBoard, computerBoardContainer);
        InterfaceManagment.hitIndicationComputer(computerCoord.positionX, computerCoord.positionY, computerAttackStatus);
        InterfaceManagment.matchStatus(computer, playerBoard, playerBoardContainer);

    }

}


export { panelInteractivity, computerElementsInteractivity }