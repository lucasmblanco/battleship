import gameboard from "./gameboard"
import * as interfaceManagment from "./interface"
import * as EventManagment from "./eventsManagment"
import * as Functionality from "./functionality"

const startGame = () => {

    const playerGameboard = gameboard();
    const computerBoard = gameboard(); 

    playerGameboard.createShips();
    computerBoard.createShips(); 

    const showPlayerShips = (container) => {
        const playerShipsBoard = playerGameboard.showBoard(); 
        playerShipsBoard.forEach((element, index) => {
            let shipFormation = interfaceManagment.shipElements(element.length, index);
            interfaceManagment.appendShip(container, shipFormation); 
        })
    }

    const assignCoordenates = (container) => {
        interfaceManagment.eachTen(container);
    }

    const boardFunctionality = (container) => {
        EventManagment.assignListener(container, Functionality.coordenatesElection); 
    }

    const boatListener = (container) => {
        EventManagment.assignListener(container, Functionality.playerBoatsFunctionality); 
    }

    return {showPlayerShips, assignCoordenates, boardFunctionality, boatListener}

}


export default startGame