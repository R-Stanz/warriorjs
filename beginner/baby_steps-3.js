class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    
    if (warrior.feel().isEmpty()) {
      if (warrior.health() <= warrior.maxHealth() * 0.5) {
        warrior.rest()
      }
      else {
        warrior.walk()
      }
    }
    else {
      warrior.attack()
    }
  }
}

