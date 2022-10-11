import * as EventManagment from "./eventsManagment"
import * as Functionality from "./functionality"

const shipElements = (shipComposition, index) => {
    const shipContainer = document.createElement('div'); 
    shipContainer.classList.add('ship-cell');
    shipContainer.setAttribute('id', index); 
    EventManagment.assignListenerPerElement(shipContainer, Functionality.playerBoatsFunctionality)
    createIndividualParts(shipContainer, shipComposition)
    return shipContainer; 
}


const createIndividualParts = (parentContainer, length) => {
    for(let i = 0; i < length; i++){
        let shipIndividual = document.createElement('div');
        shipIndividual.classList.add('ship'); 
        shipIndividual.classList.add(length);
        parentContainer.append(shipIndividual); 
    }
}

const appendShip = (container, element) => {
    container.append(element)
}

const eachTen = (container) => {
    let elements = []; 
    let y = 0;
    for(let i = 0; i < container.length; i++){
        elements.push(container[i]); 
        if(elements.length === 10) {
            y += 1
            assignXY(elements, y); 
            elements = []; 
        }
    }
}




const assignXY = (container, y) => {
    for(let i = 0; i < container.length; i++){
        container[i].setAttribute('data-x', i + 1);
        container[i].setAttribute('data-y', y)
    
    }
}







export { shipElements, appendShip, eachTen }