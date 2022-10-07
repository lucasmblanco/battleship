const Player = () => {
    
    const attackEnemyBoard = (board, x, y) => {
        if(!x && !y) return board.receiveAttack(generateRandomNumber(), generateRandomNumber());
        return board.receiveAttack(x,y); 
    }

    const generateRandomNumber = () => Math.floor(Math.random() * 10); 

    /*
    const computerAttack = (board) => {
        return board.receiveAttack(generateRandomNumber(),generateRandomNumber())
    }
    */
    

    return { attackEnemyBoard }
}

export default Player