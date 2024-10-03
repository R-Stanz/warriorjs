class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */

	playTurn(warrior) {
		let direction = this.getDirection(warrior)

		if (warrior.feel('backward').isWall() &&
			! this.isFullHealth(warrior)) {

			warrior.rest()
		}
		else if (warrior.feel(direction).isEmpty()) {
			warrior.walk(direction)
		}
		else if (warrior.feel(direction).getUnit().isBound()) {
			warrior.rescue(direction)
		}
		else {
			warrior.attack(direction)
		}
		this.health = warrior.health()
	}

	getDirection(warrior) {
		if (! this.isAttacked(warrior)  &&
			this.isLowHealth(warrior)) {

			return 'backward'
		}
		return 'forward'
	}

	isLowHealth(warrior) {
		if (warrior.health() < 9) {
			return true
		}
		return false
	}

	isFullHealth(warrior) {
		if (warrior.health() == warrior.maxHealth()) {
			return true
		}
		return false
	}

	isAttacked(warrior) {
		if (warrior.health() >= this.health) {
			return false
		}
		return true
	}

}
