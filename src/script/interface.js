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


export { shipElements, appendShip }