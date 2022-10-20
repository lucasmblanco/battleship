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
const boardElementsFunctionality = (board) => {
  //  const playerBoardElements = document.querySelectorAll('div.player');
    playerBoardListenerAndCoordenates(board); 
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
            Functionality.panelInteractivity(e, board);
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
}


const shipLocationOnBoard = (index, shipComposition) => {
    const boardElements = document.querySelectorAll('div.player');
    const composition = shipComposition; 
    for(let i = 0; i < composition; i++){
        boardElements[index + i].classList.add('ship-on-water')
    }
}

const computerBoardInteractivity = (computerBoard, playerBoard, player) => {
   const computerBoardElements = document.querySelectorAll('div.computer');
   const playerBoardElements = document.querySelectorAll('div.player')


    computerBoardElements.forEach(element => { element.addEventListener('click', test, {once: true}) })
        // LA FUNCION TEST VA A IR EN FUNCTIONALITY.JS CON LA IMPLEMENTACION PARECIDA A LA OTRA 
    function test(event){
        if(!playerBoard.statusOfShips()){
            const playerAttackStatus = player.attackEnemyBoard(computerBoard,Number(event.target.dataset.x), Number(event.target.dataset.y));
            hitIndication(event.target, playerAttackStatus);

            //AÑARDIR VISUALIZASION DEL ATAQUE CUANDO ES ERRADO Y CUANDO PEGA; \
            // crear function en player que se fije si hundio todos los barcos del tablero contrario; 
            

            //COMPUTADORA
           // const computerAttackStatus = enemy.attackEnemyBoard(playerBoard); 
           // hitIndication(event.target, computerAttackStatus);
        }
    }
} 
    
const hitIndication = (element, hit) => {
    if(hit === 'You miss the shot!' && !element.classList.contains('hit')) element.classList.add('miss'); 
    else if(!element.classList.contains('miss')) element.classList.add('hit'); 
}


export { shipElements, appendShip, boardElementsFunctionality, shipElementFunctionality, showPlayerShips, deleteBoardInteraction, shipLocationOnBoard, computerBoardInteractivity }