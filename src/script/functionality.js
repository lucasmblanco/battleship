const coordenatesElection = (event) => {
    console.log(event.target.dataset.x); 
    console.log(event.target.dataset.y); 
}

const playerBoatsFunctionality = (event) => {
    console.log(event.target.id); 
}

export {coordenatesElection, playerBoatsFunctionality}