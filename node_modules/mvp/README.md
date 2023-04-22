# Minimum Viable Pizza

An algorithm to calculate the amount of pizza you should buy. Given:

* A standard "slice" size
* An array of eaters with a desired number of standard slices
* The pizza sizes and prices of the pizza shop
* The main sorting criteria

The algorithm will in turn recommend several pizza ordering options that will satisfy the group's cravings.

## What can I do with it?

Well, you could use it to figure out what pizza to order.  You could also use it as the basis of a "TodoMVP" project to try out a new library/framework/etc.

## How does the MVP algorithm work?

It just generates permutations of all of the pizza configurations that order enough pizza, without ordering an extra pizza, and then ranks and sorts them on several axes.