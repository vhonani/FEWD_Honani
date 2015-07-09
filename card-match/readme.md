# Card Match Game

## Summary

Using your knowledge of HTML, CSS and Javascript, work in a team of no more than 3 people to create a card matching game similar to the card game Memory. View the video in Slack for more details of the look and feel.

## Description

The game should shuffle a desk of cards and display those cards in a grid on a card table surface. Every time the game loads, the order of cards is random. The back of each card is displayed. When the user clicks or taps on a card, it should flip over using a CSS transition. After the player selects a second card and it is revealed with the same animation, the program should check if the suit of each card is the same. If the suits match, the card should remain flipped over. If the suits are not equal, the cards should then animate back to their original position. The player wins after revealing all of the cards on the table! Display a message for the user.

## Instructions

1. Shuffle a deck of cards.
2. Display the cards in a grid on the card table.
3. When the user selects a card, flip it over with a CSS transition.
4. After the user selects 2 cards, determine if the suits match.
5. If the suits match, leave the cards turned over.
6. If the suits don't match, then flip the cards back over.
7. When all the cards are flipped over, display a message for the player.

## Hints

- Use HTML to create a `View`. You might want to make a `<div>` for a table and `Elements` for the cards.

- Style and animate the cards with CSS.

- Use your knowledge of Javascript `Array` and `Object` to create a `Model` for the cards of the game.

- Write `Function` that serves as the `Controller`. The `Controller` should essentially deliver the `Model` to the `View` and determine the logic needed to the display the game for a user.

## Bonus

* Animate the cards being dealt.


### Assets

img/bicycle-back.jpg
img/french-suits.svg
readme.md
