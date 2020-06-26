---
template: post
title: How to use Cleave.js
slug: /posts/cleave-js-how-to-use
draft: false
priority: 0
date: 2018-01-04T00:46:37.121Z
description: >-
  Cleave.js a handy JavaScript library used for formatting user's input in real time.
category: library
tags:
  - javascript
  - library
  - development
---

I’ve recently come across a nifty JavaScript library called Cleave.js and it formats the user’s input in real-time. It’s great in pure JavaScript but can also be used in React and Angular.

In my day-to-day job I often have customer requirements to validate the user input, have a max length on the input, format currency, things like that. I couldn’t believe how quick it is to implement and want to share it.

First, you include the library in your project, given you have an input that you want formatting, you create a new Cleave instance. The first argument is a String containing the selector you want to target, it can handle the following:

- ID selector
- Class selector
- Data attributes
- Name attributes
- And more …

The second argument passed in is a configurable object which specifies how you want to format the text. You can specify whether its a credit card number, date, telephone, time or plain numeric.

A usage I have recently implemented is formatting a Portuguese number. There currency format uses periods ‘.’ in place where we would have commas ‘,’ for thousands. E.g. 124.545,00
One traditional way of implementing this would be to use string templates and event listeners on the input but with Cleave.js it’s simply this:

```javascript
// Basic
new Cleave('.selector', configObject)

// Example
new Cleave('.my-input', {
  numeral: true,
  numeralDecimalMark: ',',
  delimeter: '.',
  prefix: 'R$',
  numeralPositiveOnly: true
})
```

Best thing about Cleave.js is that it’s readable, well-written documentation and very flexible. Another use case would be to format an input and once completed, a continue button appears. Luckily for us, there is a ‘onValueChanged’ callback, this is triggered on input change and can obtain the target value. In here, you could validate the length of the value and show/hide the button for example.

If you ever have to format an input in JavaScript, I would highly recommend investigating this library.

Thank you for reading this post.
