# 1895 Game of Limit

- Description

Alice and Bob decided to play a simple game to pass their time.
The game is played with a deck containing N cards, numbered from 1 to N.
One card is initially on the table. Also, there is a stack containing all other cards.

Alice begins taking the card on the top of the stack. She then verifies if the absolute difference between the card which is currently on the table and the card taken from the stack is at most a limit L. In other words, if the current card on the table is T and the card taken from the stack is S, then she verifies if |T-S| ≤ L. If that is true,  she replaces the card on the table by the taken card, and scores |T-S| points. If it is not true, she does nothing -- the card on the table is not changed, and she does not score.

Bob then plays by doing the same. He takes a card from the stack, compares it with the card on the table, and moves accordingly. Alice then plays again, then Bob plays again, and so on. They keep playing until the stack of cards is empty. Your task is to determine the final score of both players.

- Entrada

The first line contains three integers N, T0 and L (1 ≤ N < 60, N is odd, 1 ≤ T0 ≤ N, 1 ≤ L ≤ 10), the number of cards, the card initially on the table, and the limit L. The next N-1 lines contains an integer Si each (1 ≤ Si ≤ N). These are the cards in the stack, in order. The first card given in the input is at the top of the stack. All cards used in the game are distinct.

- Saída

Print a single line with two integers A and B separated by a single space, where A is Alice's final score, and B is Bob's final score.
