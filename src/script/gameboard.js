import ship from './ship'

const gameboard = () => {

    const shipsOnBoard = []; 
    const missedShots = []; 

    const showSelectedShip = (index) => {
        if(typeof index === 'number' && index < shipsOnBoard.length) return shipsOnBoard[index].showComposition()
        return 
    }
       
    const showBoard = () => shipsOnBoard.map(element => element.showComposition());
        
    const createShips = () => {
        let newShip;
        for(let i = 5; i > 1; i--){
            if(i === 3){
                newShip = ship(i); 
                shipsOnBoard.push(newShip);
            } 
            newShip = ship(i); 
            shipsOnBoard.push(newShip); 
        }
    }

    const assignShipPosition = (index, x, y) => {
        return shipsOnBoard[index].fillComposition(x, y); 
    }

    const receiveAttack = (x,y) => { 
        const newAttack = shipsOnBoard.some(element => element.hit(x,y));
        if(!newAttack){
            missedShots.push({'x': x, 'y': y});
            return 'You miss the shot!';
        }
        return 'It was an impact!';
    }

    const showMissedShots = () => missedShots; 
    
    const checkShipStatus = () => {
        const result =  shipsOnBoard.every(ship => ship.isSunk() === true)
        return result === true ? 'All ships are lost!' : null
    }
    
    return { assignShipPosition, receiveAttack, createShips, showSelectedShip, showMissedShots, checkShipStatus, showBoard }

}

export default gameboard