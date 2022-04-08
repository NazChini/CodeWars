// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

//Topics tested: FUNDAMENTALS | GAMES | ALGORITHMS | CLASSES | BASIC LANGUAGE FEATURES | OBJECT-ORIENTED PROGRAMMING

function declareWinner(fighter1, fighter2, firstAttacker) {
  const [attacker1, attacker2] =
    fighter1.name === firstAttacker
      ? [fighter1, fighter2]
      : [fighter2, fighter1];

  while (attacker1.health > 0 && attacker2.health > 0) {
    attacker2.health -= attacker1.damagePerAttack;
    if (attacker2.health <= 0) return attacker1.toString();
    attacker1.health -= attacker2.damagePerAttack;
    if (attacker1.health <= 0) return attacker2.toString();
  }
}

//Solution 02 - Separation of concerns
function declareWinner(fighter1, fighter2, firstAttacker) {
  var attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;

  function noOneWins() {
    return fighter1.health > 0 && fighter2.health > 0;
  }

  function getNextAttacker(attacker) {
    return attacker === fighter1 ? fighter2 : fighter1;
  }

  function getDefender(attacker) {
    return getNextAttacker(attacker);
  }

  function killRound(attacker) {
    var defender = getDefender(attacker);
    defender.health -= attacker.damagePerAttack;
  }

  function getWinner() {
    return fighter1.health > 0 ? fighter1.name : fighter2.name;
  }

  while (noOneWins()) {
    killRound(attacker);
    attacker = getNextAttacker(attacker);
  }

  return getWinner();
}
