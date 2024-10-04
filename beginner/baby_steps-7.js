class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */

	playTurn(warrior) {
		let direction = 'forward'
		if (this.isLowHealth(warrior)) {
			direction = 'backward'
		}

		if (warrior.feel().isWall()) {
			warrior.pivot()
		}
		else if (warrior.feel('backward').isWall()
			&& warrior.health() < warrior.maxHealth()) {
			
			warrior.rest()
		}
		else if (warrior.feel(direction).isEmpty()) {
			warrior.walk(direction)
		}
		else {
			warrior.attack(direction)
		}

		this.health = warrior.health()
	}

	isLowHealth(warrior) {
		if (warrior.health() < warrior.maxHealth() * 0.5) {
			return true
		}
		return false
	}
}
