---
template: post
title: Lessons learnt - A not so obvious failing second unit test.
slug: /posts/unit-testing-overwriting-data-tdd
draft: false
priority: 0
date: 2020-05-24T00:46:37.121Z
description: >-
  How I solved my failing second unit test through the power of debugging.
category: unit-testing
tags:
  - javascript
  - unit-testing
  - development
  - tdd
---

# Lessons learnt - A not so obvious failing second unit test.

## Background knowledge

I have been recently working on a personal project, creating a top trumps game. It is very basic where one real player can play against the computer. Whilst working on the functionality to split the deck of cards in half, I had an issue with my unit tests failing on the second test written.

This is my original code where the second test would fail. Initial I could not see the problem and actually thought there was an issue with my tests.

```javascript
const splitDeck = (data) => {

  const half = Math.ceil(data.length / 2);

  return {
    playerOne: data.splice(0, half),
    computer: data.splice(-half),
  };
};

\\ Unit test
it('should not contain duplicate card from player one in computer array', () => {
    const result = splitDeck(TEST_DECK);

    expect(result.computer).not.toContainEqual(
        expect.objectContaining(result.playerOne[0]),
    );
});

```

Can you see what I missed? Or how to problem solve this issue?

### Debugging

Debugging is your best friend, it is not so clear sometimes to why a unit test will fail. I had the error to say it expected 'X' but received 'Y'. My approach was to place logging in various parts of the code to output my variables. It was by logging the variables to the console, I found that the data in the array, did not have the values I expected.

### Solved

After debugging I found, I forgot to clone my data to a new array, it was splitting the original data array in half and returning an empty array.
When I needed to use the data for the next test, it was always failing as it was an empty array. I solved this issue using the ES6 spread operator to duplicate the array.

```javascript
const splitDeck = cards => {
  const data = [...cards]

  const half = Math.ceil(data.length / 2)

  return {
    playerOne: data.splice(0, half),
    computer: data.splice(-half)
  }
}
```
