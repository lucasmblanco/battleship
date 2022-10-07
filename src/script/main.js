import '../styles/style.scss'
import startGame from './gameloop'


const shipsContainer = document.querySelector('div.ships-container'); 

const startBattleship = () => {
    console.log('hola')
    const newGame = startGame(); 
    //shipsContainer.forEach(element => newGame.showPlayerShips(element));
    newGame.showPlayerShips(shipsContainer)
}


const playButton = document.querySelector('button.play-button');
playButton.addEventListener('click', startBattleship)
