# Sparta-project-1
### Description
The purpose of this project is to make a functioning game. I attempted to make three games, only one of which functioned as intended. The first game attempted was a moving obstacle avoidance game, the second game was a maze, and finally the third game which works is hangman.

### Languages used
* HTML
* Javascript
* CSS
* Canvas

### How to download
1. Search on Github for the user AhmedHamouda407
2. Find the repository named sparta-grid-maker
3. Clone the repository
4. cd into the repository


(If its hosted on Github Pages then...)
#### You can view the page [here]()

### Challenges (you can include images and code block here)
There were many challenges throughout the project:

#### First game: Obstacle Avoidance (moving obstacles)

1. The first game produced revolved around making a player (box) and obstacles(vertical rectangles) with gaps which a player must maneuver through. This was achieved using a canvas  
2. The first challenge was moving the player without the obstacles disappearing, as soon as a  keypad was pressed triggering movement, the obstacles created would disappear. This was solved by using a setinterval function.
3. The second challenge was moving obstacles, and removing their traces of the screen, this was solved by resetting the canvas.
4. The final major problem was looping the animation of the obstacles moving from right to left, to repeat again. Using while loops and for loops would cause the browser to freeze. In addition looping the creation of objects and moving these objects from right to left was not achieved and halted any further progress of the game.

#### Second game: Maze

1. The majority of the code used for the maze was derived from the obstacle avoidance game. The major difference being the positioning of obstacles and the obstacles remaining static.
2. As a result, the only challenge would revole around collisions. Despite the collision rules being implemented within the code, any collisions between the player and objects would not be registered. The solution probably requires a higher degree of object orientated programming.

#### Third game: Hangman
1- The final game was hangman which did not require the use of canvas, instead there was more emphasis on using the DOM to interact with the html page. One major problem was changing the color of a letter if correct. Even though this was later solved, when a correct letter would be chosen, all of the letters would turn red, the solution required the use of the index number of each list generated corresponding to the correct letter.

2-The final problem was storing the userinputs into an array and comparing the user array with the array containing the individual letters. This was the wrong approach to take, instead a variable was used to store user data as a string and compared to the correct word chosen.

### Learning points
1. Using empty variables which would later be used to store input and compare to other data sets.
2. I gained much greater experience using event listeners and console log to keep track of how the code works and any bugs.
3. One of my major weak points is using the DOM, but with the hangman project I feel more confident.I believe I still need more practice to gain a greater understaning of how the DOM works.
4.For the collision based games, I gained some understanding of how to use the canvas and add animation. I need to use object orientated programming to a higher extent to make my code function more efficiently which may solve the animation and collison problems I encountered. 