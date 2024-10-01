class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    
    if (warrior.feel().isEmpty()) {
      if (warrior.health() <= warrior.maxHealth() * 0.6 && 
          warrior.health() >= this.health) {
        warrior.rest()
      }
      else {
        warrior.walk()
      }
    }
    else if (warrior.feel().getUnit().isBound()) {
      warrior.rescue()
    }
    else {
      warrior.attack()
    }
    this.health = warrior.health()
  }
}

