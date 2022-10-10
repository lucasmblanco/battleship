const shipElements = (shipComposition) => {
    const shipContainer = document.createElement('div'); 
    shipContainer.classList.add('ship-cell')
    for(let i = 0; i < shipComposition; i++){
        let shipIndividual = document.createElement('div');
        shipIndividual.classList.add('ship'); 
        shipIndividual.classList.add(shipComposition);
        shipContainer.append(shipIndividual); 
    }
    
    return shipContainer; 
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