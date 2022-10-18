import player from '../script/player';
import gameboard from '../script/gameboard';


// create player and gameboard
const newPlayer = player(); 
const playerGameboard = gameboard(); 


//create computer and gameboard
const computerPlayer = player();
const computerGameboard = gameboard(); 

// mocking gameboard prop
computerGameboard.receiveAttack = jest.fn();
playerGameboard.receiveAttack = jest.fn(); 



test('check if board received the corresponded coordenates of the attack', () => {
    newPlayer.attackEnemyBoard(computerGameboard, 1, 5)
    expect(computerGameboard.receiveAttack).toHaveBeenCalledWith(1, 5)
});

test('check if computer can attack player without the needs of coordenates', () => {
    computerPlayer.attackEnemyBoard(playerGameboard)
    expect(playerGameboard.receiveAttack).toHaveBeenCalled()
})




/*


// create player and gameboard
const newPlayer = player(); 
const playerGameboard = gameboard(); 
playerGameboard.createShips(); 
playerGameboard.assignShipPosition(0,0,0); 

//create computer and gameboard
const computerPlayer = player();
const computerGameboard = gameboard(); 
computerGameboard.createShips();
computerGameboard.assignShipPosition(0,1,1); 


test.only('if new player can attack computer board', () => {
    expect(newPlayer.attackEnemyBoard(computerGameboard, 1, 5)).toBe('It was an impact!')
});

test.only('can computer attack player gameboard', () => {
    expect(computerPlayer.attackEnemyBoard(playerGameboard)).toBe('You miss the shot!'); 
})

test.only('can computer attack player gameboard', () => {
    expect(computerPlayer.attackEnemyBoard(playerGameboard)).toBe('You miss the shot!'); 
})

test.only('watch were computer shot', () => {
    let expected = [ {'x': '', 'y': ''}]
    expect(playerGameboard.showMissedShots()).toEqual(expect.arrayContaining(expected))
})


*/