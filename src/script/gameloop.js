import gameboard from "./gameboard"
import * as interfaceManagment from "./interface"
import * as EventManagment from "./eventsManagment"
import * as Functionality from "./functionality"

const preGame = () => {

    const playerGameboard = gameboard();
    const computerBoard = gameboard(); 

    playerGameboard.createShips();
    computerBoard.createShips(); 

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





    return {playerGameboard, computerBoard}

}


const startGame = () => {
    console.log('hola')
}

export {preGame, startGame} 