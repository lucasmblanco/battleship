const Player = () => {
    
    const attackEnemyBoard = (board, x, y) => {
        if(!x && !y) return board.receiveAttack(generateRandomNumber(), generateRandomNumber());
        return board.receiveAttack(x,y); 
    }

    const generateRandomNumber = (shipComposition) =>{
        let randomNumber = Math.floor(Math.random() * 10) + 1; 
        if(shipComposition + randomNumber >= 11) {
            console.log('FUNCTION ACTIVADA!')
            randomNumber = Math.floor(Math.random() * (10 - shipComposition)) + 1; 
        }
        return randomNumber;
    }

    /*
    const computerAttack = (board) => {
        return board.receiveAttack(generateRandomNumber(),generateRandomNumber())
    }
    */
    

    return { attackEnemyBoard, generateRandomNumber }
}

export default Player