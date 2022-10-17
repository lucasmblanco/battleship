const ship = (length) => {

    const shipComposition = [];
    createComposition(length); 
    
    
    function createComposition(length){
        for(let i = 0; i < length; i++) {
            shipComposition.push({'x': '', 'y': ''})
        }
    }

    const showComposition = () => shipComposition;


    const fillComposition = (x,y) => {
        if( x + shipComposition.length > 11) return 'Not assigned'
        for(let i = 0; i < shipComposition.length; i++) {
            shipComposition[i].x = x + i;
            shipComposition[i].y = y;
        }
        return 'Assigned with success'
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

    return { createComposition, showComposition, sayLength, fillComposition, hit, isSunk }
}

export default ship 