import '../styles/style.scss'
import * as Gameloop from './gameloop'
import * as InterfaceManagment from "./interface"; 


const playButton = document.querySelector('button.play-button');
const playerBoardContainer = document.querySelector('div.player-board'); 
const computerBoardContainer = document.querySelector('div.computer-board')
const playerBoardElements = document.querySelectorAll('div.player');
const computerBoardElements = document.querySelectorAll('div.computer')


const startBattleship = () => {
  const newGame = Gameloop.preGame(); 
  InterfaceManagment.showPlayerShips(newGame.playerGameboard); 
  InterfaceManagment.shipElementFunctionality(newGame.playerGameboard); 
  InterfaceManagment.computerBoardInteractivity(newGame.playerGameboard, newGame.newPlayer, newGame.computerBoard, newGame.computer, playerBoardContainer, computerBoardContainer ); 
}

playButton.addEventListener('click', startBattleship, {once: true});
InterfaceManagment.boardElementsFunctionality(playerBoardElements); 
InterfaceManagment.boardElementsFunctionality(computerBoardElements); 
 