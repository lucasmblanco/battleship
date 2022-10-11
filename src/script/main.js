import '../styles/style.scss'
import startGame from './gameloop'

const playButton = document.querySelector('button.play-button');
const shipsContainer = document.querySelector('div.ships-container'); 
const boardElements = document.querySelectorAll('div.player'); 


const startBattleship = () => {
    const playerBoats = document.querySelectorAll('div.ship-cell'); 
   //console.log('hola')
    const newGame = startGame(); 
    newGame.showPlayerShips(shipsContainer);
    newGame.assignCoordenates(boardElements); 
    newGame.boardFunctionality(boardElements); 
    //newGame.boatListener(playerBoats)
}

playButton.addEventListener('click', startBattleship);


//boardElements.addEventListener('click', selectPosititon)
