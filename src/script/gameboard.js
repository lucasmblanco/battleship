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
        return arr;
    } 

    const statusOfShips = () => {
        const emptyPosition = {
            'x': '',
            'y': ''
        }
        const board = showBoard();
        return  board.some(ships => 
                    ships.some(shipPositions => 
                        objectsEqual(emptyPosition, shipPositions)))

    }

    //const countTimesCalled = (count => () => ++count)(0);

    const assignShipPosition = (index, x, y, opt) => {
        
       let newShip = shipsOnBoard[index].fillComposition(x, y); 
        if(Array.isArray(newShip) && index !== 0){
            const board = deletePosition(showBoard(), index);
            const status = newShip.some(newPositions => 
                board.some(ships => 
                    ships.some(shipPositions => 
                        objectsEqual(newPositions, shipPositions))));
            if(status) {
                if(opt) {
                   return newShip = shipsOnBoard[index].fillComposition(x, y + 1 );
                }
                shipsOnBoard[index].eraseComposition();
                console.log('repetido!!!')
                return 'Not assigned'
            }
        } 
        return  newShip
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
        const helper = 5
        for(let i = 0; i < 5; i++){
            console.log(helper - i)
            let newShip = assignShipPosition(i, computer.generateRandomNumber(helper - i), computer.generateRandomNumber(), true)
            //SI OPT ES TRUE... 1# AGREGAR OPT A ASSIGN 
            if(newShip === 'Not assigned') newShip = assignShipPosition(i, computer.generateRandomNumber(helper - i), computer.generateRandomNumber(), true)
        }
        console.log(showBoard()); 
    }

    
    return { assignShipPosition, receiveAttack, createShips, showSelectedShip, showMissedShots, checkShipStatus, showBoard, computerAssignShipPosition, statusOfShips }

}

export default gameboard