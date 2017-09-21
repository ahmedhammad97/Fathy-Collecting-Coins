![Screenshot](https://github.com/ahmedhammad97/FathyCollectingCoins/blob/master/fathy.JPG)
A Javascript level progression game. The hero of the game is Fathy.
It consist of 6 levels .. each built as string array to form a matrix.
The player wins a level when he collects all the coins.
The player loses when he hits a lava cell or fall out of the grid.

A function that reads the matrix and convert to either static or dynamic objects is called Level.
The function that displays the game build a table of cells, either a space,lava,wall if static.
And whether a player,moving lava,coins if moving.

A function Vector kept to give x and y coordinates for every element.
And a track of their places is set in an arrays called Grid and Actors.

Drawing the game used a functions drawBackground,drawActors and drawFrame to display continous changes.
Also function set to keep the player almost in the middle of the game always by shifting all other elements.

Motion is logged in by key presses. Horizontal and vertical motion of player was seperated to allow them work together.
Any other moving object has an act function to specify it's motion as needed.

Collision is known when 2 cells have the same Vector "pos".

The game is similar to a game project in "Eloquent Javascript" Book.

Update 1: Forcing the player to freeze when he loses by simply setting the x speed and jumping speed both to zero.
