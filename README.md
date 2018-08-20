# Fathy Collecting Coins
**A level progression game, where the player "Fathy" tries to collect all the coins in each level, while avoiding monsters, moving and static lava blocks.**


## How it works:
The game plans are written as 2D arrays of chars, which are rendered to an HTML blocks and attached to the document body -No canvas used-.

The actors (monsters and moving lava), are given a range of pixels to move in, and then either reverse the motion direction, or reset to the starting position.

Each actor has a collide prototype, which is fired when the player touches it, each with a different set of actions. For example, you may kill a monster if collide from the top of it, but loses if collide from the side.

Finally, when the player loses, the level restarted, and the next level is loaded then he collects all the coins in a level.


## Features:
- ScoreBoard with a track of time, score, and coins left.
- Ability to pause the game.
- Sound effects for many actions.
- Five well designed level maps.
- Different speed for each monster.


## Screenshots:
![Screenshot](https://github.com/ahmedhammad97/FathyCollectingCoins/blob/master/imgs/Wallpaper.png)

__Idea and plans were copied from "Eloquent Javascript" book.__
