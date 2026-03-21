# Hungry Hungry Froggy
Lanna Check

[View this project online](https://lannacheck-ops.github.io/cart253/art-jam/template-p5-project/)

## Description

A game about catching flies with your frog-tongue to avoid dying of hunger

### Controls
> - Click anywhere on the screen to launch the frog's tongue to eat flies
> - Click on the screen to catch potions
> - Press P to use potions to increase the frog's tongue size for 5 seconds

### Modifications
> - Added a hungry meter that reduces over time. This hunger meter increases when the frog eats "good" flies. When the hunger meter runs out, the frog dies of hunger and the game is over.
> - Added a hunger meter icon that smiles when the frog's hunger value is normal but when the frog's hunger is at a critical level, the icon frowns.
> - The frog's eyes follows the mouse position and the hungrier the frog gets the grayer its eyes become.
> - The frog's tongue speed and how far the tongue shoots out is affected by how hungry the frog is. For example, the hungrier the frog is, the slower its tongue shoots out and the tongue covers a shorter distance on the y axis.
> - Made multiple flies appear on the screen at random positions with random sizes using arrays and for loops.
> - Added different fly types. When eaten: black flies increase your hunger meter based on their size, blue flies increase your hunger meter and freezes it for 2 seconds(the seconds add up for every blue fly you eat), yellow flies are poisonous, they will decrease your hunger meter.
> - Flies have a sine wave movement on their y axis and they have wings that flap.
> - Added a purple potion that the frog can catch with its tongue. When acquired, the frog can press P to activate the potion which increases the frog's tongue size, sets the frog's tongue speed to 20 and makes the frog's tongue reach the top of the screen for 5 seconds. Activating the potion makes the frog turn purple but the color fades back to the frog's original color as the potion's effects run out.
> - The score system records how many flies the frog has eaten.

### New Functions Used
> - lerpColor()
## Screenshot(s)
> ![Image of the Hungry Hungry Froggy Start Screen](assets/images/startscreeen.png)
> ![Image of the Hungry Hungry Froggy Tutorial Screen](assets/images/tutorial1.png)
> ![Image of the Hungry Hungry Froggy Game Begin Screen](assets/images/gamebegin.png)
> ![Image of the Hungry Hungry Froggy Game Screen](assets/images/gamescreen.png)
> ![Image of the Hungry Hungry Froggy Low Health Screen](assets/images/lowhealth.png)
> ![Image of the Hungry Hungry Froggy Game Over Screen](assets/images/gameover.png)