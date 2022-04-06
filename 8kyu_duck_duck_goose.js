// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)
//Topics tested : FUNDAMENTALS | ARRAYS | LISTS | DATA STRUCTURES

//Solution 01
function duckDuckGoose(players, goose) {
  while (players.length < goose) {
    goose = goose - players.length;
  }
  return players[goose - 1].name;
}

//Solution 02
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}
