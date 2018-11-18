var DamageCalc = function() {
	return {
		data: {
			skillDamage: 100000,
			damageIncrease: 0,
			enemyDefense: 250,
			pierce: 0,
			enemyResistance: 250,
			specialPiercing: 0
		},
		
		getDamageIncreaseFactor: function(val) {
			if(val < 0)
				return 1;
			else
				return 1 + val;
		},

		getEnemyDefenseFactor: function() {
			return 1/this.data.enemyDefense;
		},

		getPierceFactor: function(val) {
			if(val < 0)
				return 1;
			else
				return 1/(1-val);
		},

		getSpecialPiercingFactor: function(val) {
			if(val < 0)
				return (1500 - this.data.enemyResistance)/1500;
			else
				return (1500 - Math.max(this.data.enemyResistance - (val * 15), 0))/1500;
		},

		getBaseDamage: function() {
			return this.data.skillDamage * this.getDamageIncreaseFactor(0) * this.getEnemyDefenseFactor() * this.getPierceFactor(0) * this.getSpecialPiercingFactor(0);
		}
	}
}