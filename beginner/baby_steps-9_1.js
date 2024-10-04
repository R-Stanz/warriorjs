// Just like the baby step 8 (but just enough to pass the level, no clear)
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
		else if (this.canShoot(warrior.look(direction))) {
			warrior.shoot(direction)
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

	isLowHealth(warrior) {
		if (warrior.health() < warrior.maxHealth() * 0.5) {
			return true
		}
		return false
	}

	canShoot(look_ls) {
		for (let i = 0; i < 3; i++) {
			if (look_ls[i] === undefined || look_ls[i].getUnit() === undefined) {}
			else if (look_ls[i].getUnit().isBound()) {
				return false
			}
			else if (look_ls[i].getUnit().isEnemy()) {
				return true
			}
		}
		return false
	}
}
