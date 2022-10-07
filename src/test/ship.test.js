import ship from '../script/ship';

const newShip = ship(3); 

 
test('ship length', () => {
   expect(newShip.sayLength()).toBe(3); 
});

test('parts of the ship with coordinates', () => {
   expect(newShip.showComposition()).toEqual([
      {x: '', y: ''},
      {x: '', y: ''},
      {x: '', y: ''}
   ])
})
 


test('see new ship composition', () => {
   newShip.composePosition(0,0)
  expect(newShip.showComposition()).toEqual([
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 0, y: 2}
   ])
})

test('Was hit? (Positive outcome)', () => {
   expect(newShip.hit(0,1)).toBeTruthy();
});


test('see new ship composition', () => {
   expect(newShip.showComposition()).toEqual([
       {x: 0, y: 0},
       {x: 0, y: 2}
    ])
 })

 test('delete 0,0', () => {
   expect(newShip.hit(0,0)).toBeTruthy();
});

test('if newShip only left one', () => {
   expect(newShip.showComposition()).toEqual([
       {x: 0, y: 2,}
    ])
 })

 test('delete 0,2', () => {
   expect(newShip.hit(0,2)).toBeTruthy();
});

test('if newShip is empty', () => {
   expect(newShip.showComposition()).toEqual([])
 })

test('Was hit? (Negative outcome)', () => {
   expect(newShip.hit(5,6)).toBeFalsy();
});

test('Ship is sunk?', () => {
   expect(newShip.isSunk()).toBeTruthy(); 
});
