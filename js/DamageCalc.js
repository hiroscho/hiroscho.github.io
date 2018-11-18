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
		
		getDamageIncreaseFactor: function(double val) {
			if(val < 0)
				return 1;
			else
				return 1 + val;
		},

		getEnemyDefenseFactor: function() {
			return 1/DamageCalc.data.enemyDefense;
		},

		getPierceFactor: function(double val) {
			if(val < 0)
				return 1;
			else
				return 1/(1-val);
		},

		getSpecialPiercingFactor: function(double val) {
			if(val < 0)
				return (1500 - DamageCalc.data.enemyResistance)/1500;
			else
				return (1500 - Math.max(DamageCalc.data.enemyResistance - (val * 15), 0))/1500;
		},

		getBaseDamage: function() {
			return DamageCalc.data.skillDamage * DamageCalc.getDamageIncreaseFactor(0) * DamageCalc.getEnemyDefenseFactor() * DamageCalc.getPierceFactor(0) * DamageCalc.getSpecialPiercingFactor(0);
		}
	}
};
	