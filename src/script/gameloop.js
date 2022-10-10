import gameboard from "./gameboard"
import * as interfaceManagment from "./interface"


const startGame = () => {

    const playerGameboard = gameboard();
    const computerBoard = gameboard(); 

    playerGameboard.createShips();
    computerBoard.createShips(); 

    const showPlayerShips = (container) => {
        const playerShipsBoard = playerGameboard.showBoard(); 
        playerShipsBoard.forEach(element => {
            let shipFormation = interfaceManagment.shipElements(element.length);
            interfaceManagment.appendShip(container, shipFormation); 
        })
    }

    const assignCoordenates = (container) => {
        interfaceManagment.eachTen(container);
    }


    return {showPlayerShips, assignCoordenates}

}


export default startGame