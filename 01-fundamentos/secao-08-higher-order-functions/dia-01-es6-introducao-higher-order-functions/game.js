const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => {
  // Math.floor(Math.random() * (max - min + 1) + min) //http://devfuria.com.br/javascript/gerar-numero-randomico-entre-2-numeros-quaisquer/
  return Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
}
const damageWarrior = () => {
  return Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) + warrior.strength);
}

console.log(damageWarrior());