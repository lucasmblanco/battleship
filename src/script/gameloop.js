import gameboard from "./gameboard"
import Player from "./player"
import * as interfaceManagment from "./interface"
import * as EventManagment from "./eventsManagment"
import * as Functionality from "./functionality"

const preGame = () => {

    const playerGameboard = gameboard();
    const computerBoard = gameboard(); 

    const newPlayer = Player(); 
    const computer = Player(); 

    playerGameboard.createShips();
    computerBoard.createShips(); 
    computerBoard.computerAssignShipPosition(computer); 



   // interfaceManagment.showPlayerShips(playerGameboard); 
    //interfaceManagment.shipElementFunctionality(); 


 //   playerGameboard.assignShipPosition()

    /*
    const showPlayerShips = (container) => {
        const playerShipsBoard = playerGameboard.showBoard(); 
        playerShipsBoard.forEach((element, index) => {
            let shipFormation = interfaceManagment.shipElements(element.length, index);
            interfaceManagment.appendShip(container, shipFormation); 
        })
    }
    */





    return {playerGameboard, computerBoard, newPlayer, computer}

}


const startGame = (playerBoard, computerBoard) => {

    
    console.log('hola')
}

export {preGame, startGame} 