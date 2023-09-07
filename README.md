[:es:](#projecto-batalla-naval) [:us:](#project-battleship)
# Projecto: Batalla Naval
Este proyecto se basa en la creacion del clásico juego de batalla naval utilizando la prática TDD (Test Driven Development).

## Tecnologías utilizadas 📚
![Tools](https://skillicons.dev/icons?i=html,scss,js,webpack,jest)

## Principales características ⭐
 - Cada objeto fue creado sin interfaz siendo su funcionamiento testeado a traves de Jest.
 - Creacion de las embarcaciones a través de una clase que nos permite crear un objeto a partir de una longitud; este objeto reconoce su estado actual indicando si alguna parte que la compone fue atacada o si todas lo fueron resultando en el hundimiento del mismo.
 - El tablero de juego es capaz de posicionar una embarcación ubicandola en coordenadas especificas dentro de él; también detecta los ataques realizados por el usuario llamando a la función correspondiente segun el resultado final de la acción (ya sea acierto en una embarcación o no); reconoce si todos las embarcaciones fueron hundidas mostrando el resultado final de la partida.
 - El objeto Jugador es usado tanto por el jugador como por la computadora, siendo capaz de reconocer cuando un movimiento es ilegal (fuera del tablero). 
 - Los diferentes componentes de la aplicación fueron abstraídos en módulos según su correspondiente función dentro de la misma.


## Problemas conocidos 👎

 - Alguna de los parametros usados para hacer la interfaz no fueron los mejores a la hora de elegirlos, usando "numeros magicos" en algunos componentes hace que la misma no tenga propiedades adaptables segun la pantalla donde se vea el contenido.
## Conclusión 🙌
Al principio fue bastante extraño y un poco lento el proceso de usar TDD para realizar los componentes pero a medida que los test se iban superando sentía que la robustez de la aplicación aumentaba, generando de esta forma una de las aplicaciones con menos problemas de lógica a la hora de su funcionamiento que he hecho hasta hoy. 
También fue bastante interesante usar SCSS por primera vez, me resultó bastante útil para organizar mejor los estilos y separar un poco los parámetros en diferentes archivos según el componente a estilizar resultando de esta manera en una aumento de productividad.
<br/> 
***
<br/>

# Project: Battleship

This project is based on creating the classic game of Battleship using Test Driven Development (TDD) practices.

## Technologies Used 📚

![Tools](https://skillicons.dev/icons?i=html,scss,js,webpack,jest)

## Key Features ⭐

-   Each object was created without an interface, and its functionality was tested using Jest.
-   Creation of ships through a class that allows us to create an object based on its length; this object keeps track of its current state, indicating if any part of it has been attacked or if all parts have been hit, resulting in its sinking.
-   The game board is capable of positioning a ship by specifying specific coordinates within it; it also detects user attacks by calling the appropriate function based on the final outcome of the action (whether it's a hit on a ship or not). It recognizes if all ships have been sunk, displaying the final result of the game.
-   The Player object is used both by the player and the computer, capable of recognizing when a move is illegal (outside the board).
-   The different components of the application were abstracted into modules according to their respective functions within the game.

## Known Issues 👎

-   Some of the parameters used for the interface design were not the best choices, and the use of "magic numbers" in some components makes the interface not adaptable to different screen sizes.

## Conclusion 🙌

At first, the process of using TDD to build the components felt somewhat strange and slow, but as the tests were passed, I felt that the robustness of the application was increasing. This resulted in one of the applications with fewer logic problems in its functionality that I have created to date. It was also quite interesting to use SCSS for the first time; I found it very useful for better organizing styles and separating parameters into different files according to the component to be styled, resulting in increased productivity.