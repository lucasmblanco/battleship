import * as EventManagment from "./eventsManagment"
import * as Functionality from "./functionality"


// Crea el contenedor de los barcos y segun la composicion de cada uno crea divs dentro de este
const shipElements = (shipComposition, index) => {
    const shipContainer = document.createElement('div'); 
    shipContainer.classList.add('ship-cell');
    shipContainer.setAttribute('id', index); 
    shipContainer.setAttribute('data-length', shipComposition); 
  //  EventManagment.assignListenerPerElement(shipContainer, Functionality.playerShipFunctionality)
    createIndividualParts(shipContainer, shipComposition)
    return shipContainer; 
}

// se encarga de crear la composicion segun la longitud y luego adherirla a un contenedor padre 
const createIndividualParts = (parentContainer, length) => {
    for(let i = 0; i < length; i++){
        let shipIndividual = document.createElement('div');
        shipIndividual.classList.add('ship'); 
        shipIndividual.classList.add(length);
        parentContainer.append(shipIndividual); 
    }
}

//apende elementos a otro contenedor
const appendShip = (container, element) => {
    container.append(element)
}

// Añade functionalidad a los dos paneles
const boardElementsFunctionality = () => {
    const playerBoardElements = document.querySelectorAll('div.player');
    playerBoardListenerAndCoordenates(playerBoardElements); 
}

// añade funcionalidad y coordenadas al panel del jugador 
const playerBoardListenerAndCoordenates = (container) => {
   //EventManagment.assignListener(container, Functionality.coordenatesElection); 
    eachTen(container, assignXY); 
}


// toma 10 elementos de un contendor y le aplica una funcion callback 
const eachTen = (container, callback) => {
    let elements = []; 
    let y = 0;
    for(let i = 0; i < container.length; i++){
        elements.push(container[i]); 
        if(elements.length === 10) {
            y += 1
            callback(elements, y); 
            elements = []; 
        }
    }
}

//asigna coordenadas a los contenedores
const assignXY = (container, y) => {
    for(let i = 0; i < container.length; i++){
        container[i].setAttribute('data-x', i + 1);
        container[i].setAttribute('data-y', y)
    }
}

const shipElementFunctionality = (board) => {

    const playerShips = document.querySelectorAll('div.ship-cell');

    playerShips.forEach(element => {
        element.addEventListener('click', function(e){
            Functionality.assignListenerToBoard(e, board);
        }, {once: true})
    })
}


const showPlayerShips = (board) => {
    const shipsContainer = document.querySelector('div.ships-container'); 
    const playerShipsBoard = board.showBoard(); 
    playerShipsBoard.forEach((element, index) => {
        appendShip(shipsContainer, shipElements(element.length, index)); 
    })
}


const deleteBoardInteraction = () => {
    const boardElements = document.querySelectorAll('div.player'); 
    boardElements.forEach(element => {
        element.removeEventListener('click', element.fn)
    })
    return true; 
}


const shipLocationOnBoard = (index, shipComposition) => {
    const boardElements = document.querySelectorAll('div.player');
    const composition = shipComposition; 
    for(let i = 0; i < composition; i++){
        boardElements[index + i].classList.add('ship-on-water')
    }


}

export { shipElements, appendShip, boardElementsFunctionality, shipElementFunctionality, showPlayerShips, deleteBoardInteraction, shipLocationOnBoard }