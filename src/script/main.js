import '../styles/style.scss'
import startGame from './gameloop'


const shipsContainer = document.querySelector('div.ships-container'); 
const boardElements = document.querySelectorAll('div.player'); 

const startBattleship = () => {
   //console.log('hola')
    const newGame = startGame(); 
    newGame.showPlayerShips(shipsContainer);
    newGame.assignCoordenates(boardElements); 
}




const playButton = document.querySelector('button.play-button');
playButton.addEventListener('click', startBattleship);


//boardElements.addEventListener('click', selectPosititon)
