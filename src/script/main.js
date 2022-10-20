import '../styles/style.scss'
import * as Gameloop from './gameloop'
import * as InterfaceManagment from "./interface"; 


const playButton = document.querySelector('button.play-button');
//const shipsContainer = document.querySelector('div.ships-container'); 
const playerBoardElements = document.querySelectorAll('div.player');
const computerBoardElements = document.querySelectorAll('div.computer')


const startBattleship = () => {
    const newGame = Gameloop.preGame(); 
  InterfaceManagment.showPlayerShips(newGame.playerGameboard); 
  InterfaceManagment.shipElementFunctionality(newGame.playerGameboard); 
  InterfaceManagment.computerBoardInteractivity(newGame.computerBoard, newGame.playerGameboard, newGame.newPlayer); 
  //InterfaceManagment.computerBoardInteractivity(newGame.computer, newGame.computerBoard, newGame.playerGameboard, newGame.newPlayer); 




}

playButton.addEventListener('click', startBattleship);
InterfaceManagment.boardElementsFunctionality(playerBoardElements); 
InterfaceManagment.boardElementsFunctionality(computerBoardElements); 
 



//boardElements.addEventListener('click', selectPosititon)
