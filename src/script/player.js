const Player = () => {
    
    const attackEnemyBoard = (board, x, y) => {
        /*
        if(!x && !y) {
            const positionX = generateRandomNumber(); 
            const positionY =  generateRandomNumber()

            return board.receiveAttack(positionX, positionY);
        }
        */
        return board.receiveAttack(x,y); 
    }

    const generateRandomNumber = (shipComposition) =>{
        let randomNumber = Math.floor(Math.random() * 10) + 1; 
        if(shipComposition + randomNumber >= 11) {
          //  console.log('FUNCTION ACTIVADA!')
            randomNumber = Math.floor(Math.random() * (9 - shipComposition)) + 1; 
        }
        return randomNumber;
    }

    const shipsDestroyed = (board) => {
        return board.checkShipStatus(); 
    }


    return { attackEnemyBoard, generateRandomNumber, shipsDestroyed }
}

export default Player