import * as InterfaceManagment from "./interface"
import Player from "./player";



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


const computerElementsInteractivity = (event, playerBoard, player, computerBoard, computer ) => { 
    if(!playerBoard.statusOfShips()){
        const playerAttackStatus = player.attackEnemyBoard(computerBoard,Number(event.target.dataset.x), Number(event.target.dataset.y));
        InterfaceManagment.hitIndication(event.target, playerAttackStatus);
        InterfaceManagment.matchStatus(player.shipsDestroyed(computerBoard)); 

        //AÑARDIR VISUALIZASION DEL ATAQUE CUANDO ES ERRADO Y CUANDO PEGA; \
        // crear function en player que se fije si hundio todos los barcos del tablero contrario; 
        

        //COMPUTADORA
        const positionX = computer.generateRandomNumber(); 
        const positionY = computer.generateRandomNumber();
        const computerAttackStatus = computer.attackEnemyBoard(playerBoard, positionX, positionY); 
        InterfaceManagment.hitIndicationComputer(positionX, positionY, computerAttackStatus)
        InterfaceManagment.matchStatus(computer.shipsDestroyed(playerBoard)); 
       // hitIndication(event.target, computerAttackStatus);

    }

}

const recievePlayerAttack = (event, player) => {

}


export { panelInteractivity, recievePlayerAttack, computerElementsInteractivity }