const ship = (length) => {

    const shipComposition = [];
    for(let i = 0; i < length; i++) {
        shipComposition.push({'x': '', 'y': ''})
    }
    
    const showComposition = () => shipComposition;


    const composePosition = (x,y) => {
        for(let i = 0; i < shipComposition.length; i++) {
            shipComposition[i].x = x;
            shipComposition[i].y = y + i;
        }
    }

    /*
    const buildShipComposition = (x, y) => {
        for(let i = 0; i < length; i++) {
            shipComposition.push({
                coordinates: {x: x, y: y + i},
                status: 'active'
            })
        }
    }
    */
   
    const sayLength = () => shipComposition.length; 

    const hit = (x,y) => {
        const indexOfDamagePostion = shipComposition.findIndex(element => JSON.stringify(element) === JSON.stringify({'x': x, 'y': y})); 
        if(indexOfDamagePostion < 0 ) return false; 
        shipComposition.splice(indexOfDamagePostion, 1);
        return true
    }

    const isSunk = () => shipComposition.length < 1 

    return { showComposition, sayLength, composePosition, hit, isSunk }
}

export default ship 