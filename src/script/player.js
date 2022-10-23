const Player = () => {

    const playerActions = []; 
    
    const attackEnemyBoard = (board, x, y) => {
        /*
        if(!x && !y) {
            const positionX = generateRandomNumber(); 
            const positionY =  generateRandomNumber()

            return board.receiveAttack(positionX, positionY);
        }
        */

        playerActions.push({'x': x,'y': y}); 
        return board.receiveAttack(x,y); 
    }

    const generateRandomNumber = (shipComposition) => {
        let randomNumber = Math.floor(Math.random() * 10) + 1; 
        if(shipComposition + randomNumber >= 11) {
          //  console.log('FUNCTION ACTIVADA!')
            randomNumber = Math.floor(Math.random() * (9 - shipComposition)) + 1; 
        }
        return randomNumber;
    }

    const generateRandomCoordenates = (shipComposition) => {
        let positionX = Math.floor(Math.random() * 10) + 1; 
        let positionY = Math.floor(Math.random() * 10) + 1; 

        const invalidCoord = playerActions.some(movements => movements.x === positionX && movements.y === positionY); 
        if(invalidCoord) {
            return generateRandomCoordenates(shipComposition); 
        } else {
            if(shipComposition + positionX >= 11) positionX = Math.floor(Math.random() * (9 - shipComposition)) + 1; 
            if(shipComposition + positionY >= 11) positionY = Math.floor(Math.random() * (9 - shipComposition)) + 1; 
        }
            return {positionX, positionY};
    }

    const searchPreviousActions = (coordX, coordY) => {
       return playerActions.some(movement => movement.x === coordX && movement.y === coordY); 
    } 

    const shipsDestroyed = (board) => {
        return board.checkShipStatus(); 
    }


    return { attackEnemyBoard, generateRandomNumber, shipsDestroyed, searchPreviousActions, generateRandomCoordenates }
}

export default Player