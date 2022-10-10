import gameboard  from "../script/gameboard";

const newGameboard = gameboard(); 

test('view select ship composition element 0', () => {
    newGameboard.createShips();
    expect(newGameboard.showSelectedShip(0)).toEqual([
        { x: "", y: "" },
        { x: "", y: "" },
        { x: "", y: "" },
        { x: "", y: "" },
        { x: "", y: "" },
    ])
});


test('see all ships in gameboard', () => {
    expect(newGameboard.showBoard()).toEqual([
        [
            { x: "", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
        ],
        [
            { x: "", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
        ],
        [
            { x: "", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
        ],
        [
            { x: "", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
        ],[
            { x: "", y: "" },
            { x: "", y: "" },
        ]

    ])
})


test('view ship composition of element 5', () => {
    expect(newGameboard.showSelectedShip(4)).toEqual([
        { x: "", y: "" },
        { x: "", y: "" },
    ])
});

test('no index provided', () => {
    expect(newGameboard.showSelectedShip()).toBeUndefined();
});


test('index provided is more bigger than any boats position', () => {
    expect(newGameboard.showSelectedShip(5)).toBeUndefined()
});

test('view select ship composition after gameboard assign a position ', () => {
    newGameboard.assignShipPosition(0, 0, 0)
    expect(newGameboard.showSelectedShip(0)).toEqual([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
    ])
}); 

test('recieve attack on right ship', () => {
    newGameboard.receiveAttack(0,0); 
    expect(newGameboard.showSelectedShip(0)).toEqual([
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
    ])
})

test('recieve attack on right ship', () => {
    expect(newGameboard.receiveAttack(1,0)).toEqual('It was an impact!')
})

test('stored missed shots', () => {
    newGameboard.receiveAttack(5,1); 
    newGameboard.receiveAttack(5,3); 
    expect(newGameboard.showMissedShots()).toEqual([
        {
            'x': 5,
            'y': 1
        },
        {
            'x': 5,
            'y': 3
        }
    ])
})

test('watch if ship 3([2]) has the correct composition', () => {
    const newGameboard = gameboard(); 
    newGameboard.createShips();
    expect(newGameboard.showSelectedShip(2)).toEqual([
        { x: "", y: "" },
        { x: "", y: "" },
        { x: "", y: "" },
    ])

})

test('watch if ship 4([3]) has the correct composition', () => {
    const newGameboard = gameboard(); 
    newGameboard.createShips();
    expect(newGameboard.showSelectedShip(3)).toEqual([
        { x: "", y: "" },
        { x: "", y: "" },
        { x: "", y: "" },
    ])

})



test('ships have been sink?', () => {
    const newGameboard = gameboard(); 
    newGameboard.createShips();
    
    newGameboard.assignShipPosition(0, 0, 0);
    newGameboard.assignShipPosition(1, 0, 1);
    newGameboard.assignShipPosition(2, 0, 2);
    newGameboard.assignShipPosition(3, 0, 3);
    newGameboard.assignShipPosition(4, 0, 4);

    //ship 1
    newGameboard.receiveAttack(0,0);
    newGameboard.receiveAttack(1,0);
    newGameboard.receiveAttack(2,0);
    newGameboard.receiveAttack(3,0);
    newGameboard.receiveAttack(4,0);

    //ship 2
    newGameboard.receiveAttack(0,1);
    newGameboard.receiveAttack(1,1);
    newGameboard.receiveAttack(2,1);
    newGameboard.receiveAttack(3,1);

    //ship 3 
    newGameboard.receiveAttack(0,2);
    newGameboard.receiveAttack(1,2);
    newGameboard.receiveAttack(2,2);

    //ship 4
    newGameboard.receiveAttack(0,3);
    newGameboard.receiveAttack(1,3);
    newGameboard.receiveAttack(2,3);

    //ship 5 
    newGameboard.receiveAttack(0,4);
    newGameboard.receiveAttack(1,4);

    expect(newGameboard.checkShipStatus()).toBe('All ships are lost!')


})


