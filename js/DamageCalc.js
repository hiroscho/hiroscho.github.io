var skillDamage = 100000;
var damageIncrease = 0;
var enemyDefense = 250;
var pierce = 0;
var enemyResistance = 250;
var specialPiercing = 0;
var baseDamage = (skillDamage * (1 + (damageIncrease/100)))

function getDamageIncreaseFactor(double val) {
	if(val < 0)
		return 1;
	else
		return 1 + val;
}

function getEnemyDefenseFactor() {
	return 1/enemyDefense;
}

function getPierceFactor(double val) {
	if(val < 0)
		return 1;
	else
		return 1/(1-val);
}

function getSpecialPiercingFactor(double val) {
	if(val < 0)
		return (1500 - enemyResistance)/1500;
	else
		return (1500 - Math.max(enemyResistance - (val * 15), 0))/1500;
}

function getBaseDamage() {
	return skillDamage * getDamageIncreaseFactor(0) * getEnemyDefenseFactor() * getPierceFactor(0) * getSpecialPiercingFactor(0);
}
	