import '../styles/style.scss'
import * as Gameloop from './gameloop'
import * as InterfaceManagment from "./interface"; 


const playButton = document.querySelector('button.play-button');
//const shipsContainer = document.querySelector('div.ships-container'); 



const startBattleship = () => {
    const newGame = Gameloop.preGame(); 
   // newGame.showPlayerShips(shipsContainer);
  //  InterfaceManagment.shipElementFunctionality(); 
  InterfaceManagment.showPlayerShips(newGame.playerGameboard); 
  InterfaceManagment.shipElementFunctionality(newGame.playerGameboard); 
  

}



playButton.addEventListener('click', startBattleship);
InterfaceManagment.boardElementsFunctionality(); 
 



//boardElements.addEventListener('click', selectPosititon)
