import ship from './ship'

const gameboard = () => {

    const shipsOnBoard = []; 
    const missedShots = []; 

    const showSelectedShip = (index) => {
        if(typeof index === 'number' && index < shipsOnBoard.length) return shipsOnBoard[index].showComposition();
       // return 
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


    const objectsEqual = (o1, o2) =>
    Object.keys(o1).length === Object.keys(o2).length 
        && Object.keys(o1).every(p => o1[p] === o2[p]); 
    


    const deletePosition = (arr, index) => {
        arr.length = index; 
        return arr ;
    } 

    const assignShipPosition = (index, x, y) => {
       // console.log(showSelectedShip(index)); 
         
        //shipsOnBoard.forEach(element => board.push(element.showComposition())); 
        //console.log(board)
       const newShip = shipsOnBoard[index].fillComposition(x, y); 

        if(Array.isArray(newShip) && index !== 0){
            const board = deletePosition(showBoard(), index); 
           // console.log(board); 
            //console.log(board); 
            //assignShipPosition.some(parts => parts.includes)
            //assignedStatus.some(ship => board.some(shipBoard => objectsEqual(ship, shipBoard))) ? 'Not assigned' : assignedStatus
            //console.log(assignedStatus);
            const status = newShip.some(newPositions => board.some(ships => ships.some(shipPositions => objectsEqual(newPositions, shipPositions))));
             
           // console.log(assignedStatus);
            if(status) {
                //console.log(board); 
                shipsOnBoard[index].eraseComposition();
               // console.log(assignedStatus);
                return 'Not assigned'
            }
            //newB.some(elementB => newA.some(elementA=> objectsEqual(elementB, elementA))) 


        }
        return newShip;
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


    const computerAssignShipPosition = (computer) => {
        for(let i = 0; i < 5; i++){
           let newShip = assignShipPosition(i, computer.generateRandomNumber(), computer.generateRandomNumber())
           if(newShip === 'Not assigned') newShip = assignShipPosition(i, computer.generateRandomNumber(), computer.generateRandomNumber())
        }
        console.log(showBoard()); 
    }

    
    return { assignShipPosition, receiveAttack, createShips, showSelectedShip, showMissedShots, checkShipStatus, showBoard, computerAssignShipPosition }

}

export default gameboard