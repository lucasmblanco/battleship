import gameboard from "./gameboard"
import * as interfaceManagment from "./interface"


const startGame = () => {

    const playerGameboard = gameboard();
    const computerBoard = gameboard(); 

    playerGameboard.createShips();
    computerBoard.createShips(); 

    const showPlayerShips = (container) => {
        /*
        for(let i = 0; i < 5; i++){
            let ship = playerGameboard.showSelectedShip(i); 
            let shipElement = interfaceManagment.shipElements(ship)
            containers[i].append(shipElement)
        }
        */

        const playerShipsBoard = playerGameboard.showBoard(); 
        playerShipsBoard.forEach(element => {
            let shipFormation = interfaceManagment.shipElements(element.length)
            interfaceManagment.appendShip(container, shipFormation)
        })
    

        
    }


/*
    const showPlayerShips = () => {
       
       for(let i = 0; i < 5; i++){
            let newShip = playerGameboard.showSelectedShip(i); 
            createShipVisualization(newShip.length); 

        }
    }

*/


    return {showPlayerShips}

}


export default startGame