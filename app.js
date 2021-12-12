// Ship Properties * **hull** is the same as hitpoints. 
// If hull reaches `0` or less, the ship is destroyed. * **firepower** is 
// the amount of damage done to the **hull** of the target with a successful 
// hit. * **accuracy** is the chance between 0 and 1 that the ship will hit 
// its target. - 

// Every time the ship will attack, calculate the chance that 
// the damage will hit the opposing ship using `Math.random()` - If the ship's 
// accuracy is `0.8` - then if the number generated from `Math.random()` is 
// less than or equal to `0.8` then the attack will be successful. If the 
// value is greater than `0.8` then the attack has missed. - Adjust the 
// accuracy based on the specs for each ship **

// Your spaceship, the USS 

// Schwarzenegger** should have the following properties: * **hull** - `20` * 
// **firepower** - `5` * **accuracy** - `.7` 

// **The alien ships** should each 
// have the following _ranged_ properties determined randomly: * hull - 
// between `3` and `6` * firepower - between `2` and `4` * accuracy - between 
// `.6` and `.8` You could be battling six alien ships each with unique values. 
// Example use of **accuracy** to determine a hit: ```javascript if (Math.random() < alien[0].accuracy) 
// { console.log('You have been hit!'); } ```


/////Classes/////
// class Alien {
//     constructor (hp, fp, acc, sh) {
//     this.startingHull = hp;
//     this.currentHull = hp;
//     this.firepower = fp;
//     this.accuracy = acc/10;
//     this.startingShield = sh;
//     this.currentShield = sh;
//     this.loadinShield = sh;
//     this.index;
//     this.alerts = {
//     counter: () => `The alien ship launches a counterattack...`, //0
//     dodged: () => `It manages to dodge your attack and takes no damage.`, //1
//     damaged: (attacker) => `You breach its hull for ${attacker.firepower} damage, leaving ${this.currentHull} health.`, //2
//     destroyed: () => `You breach its hull and destroy it!`, //3
//     multi: () => `A second alien ship joins in on the an attack...` //4
//     }
//     }
//     updateStartingHall () {
//     this.startingHull = this.currentHull;
//     }
//     attack (target) {
//     alert(this.alerts["counter"]());
//     }
//     dodgeAttack () {
//     alert(this.alerts["dodged"]());
//     }
//     takeDamage (attacker) {
//     alert(this.alerts["damaged"](attacker));
//     this.updateStartingHall();
//     }
//     destroyed () {
//     alert(this.alerts["destroyed"]());
//     }
//     }
//     class Boss extends Alien {
//     constructor (hp, fp, acc, sh) {
//     super(hp, fp, acc, sh);
//     this.alerts = {
//     counter: () => `The alien mothership launches a counterattack...`, //0
//     dodged: () => `It manages to dodge your attack and takes no damage.`, //1
//     damaged: (attacker) => `You breach its hull for ${attacker.firepower} damage, leaving ${this.currentHull} health.`, //2
//     destroyed: () => `You breach its hull and destroy it!`, //3
//     damagedShield: (attacker) => `You erode its shield for ${attacker.firepower} damage, leaving ${this.currentShield} shield health.`, //4
//     destroyedShield: () => `You damage its shield down to 0 health!` //5
//     }
//     }
//     updateStartingShield () {
//     this.startingShield = this.currentShield;
//     }
//     takeShieldDamage (attacker) {
//     alert(this.alerts["damagedShield"](attacker));
//     this.updateStartingShield();
//     }
//     shieldDestroyed () {
//     alert(this.alerts["destroyedShield"]());
//     this.updateStartingShield();
//     this.currentShield = 0;
//     }
//     }
//     class Uss extends Alien {
//     constructor (hp, fp, acc) {
//     super(hp, fp, acc);
//     this.alerts = {
//     attack: () => `You take aim at the alien ship...`, //0
//     dodged: () => `You successfully dodge the attack and take no damage!`, //1
//     damaged: (attacker) => `Your hull is breached for ${attacker.firepower} damage, leaving ${this.currentHull} health.`, //2
//     destroyed: () => `Your hull is breached, destroying your ship.`, //3
//     repaired: () => `Your hull has been repaired for 1 health.`, //4
//     attackBoss: () =>`You take aim at the alien mothership...` //5
//     }
//     }
//     attack (target) {
//     target.loadinShield > 0 ? alert(this.alerts["attackBoss"]()) : alert(this.alerts["attack"]());
//     }
//     destroyed () {
//     alert(this.alerts["destroyed"]());
//     }
//     retreat () {
//     game.userChoice("retreatYesOrNo","yes","no","retreatYes","retreatNo");
//     }
//     }
//     class GameLogic {
//     constructor() {
//     this.ussSchwarzenegger = new Uss (20, 5, 7.5);
//     this.alienBoss = new Boss (6,4,8,6);
//     this.alienFleet = [];
//     this.userDifficulty;
//     this.startingFleetSize;
//     this.target;
//     this.attacker;
//     this.messages = {
//     selectDifficulty: () => `Please select a difficulty level.`, //0
//     attackOrRetreat: () => `[Current Health: ${this.ussSchwarzenegger.currentHull}] [Target's Health: ${this.alienFleet[0].currentHull}] [Enemies Remaining: ${this.alienFleet.length}],
//     \nDo you want to attack the ${this.changeMessages1()} alien ship?`, //1
//     attackOrRetreatBoss: () => `[Current Health: ${this.ussSchwarzenegger.currentHull}] [Target's Shield: ${this.alienFleet[0].currentShield}] [Target's Health: ${this.alienFleet[0].currentHull}]
//     \nDo you want to attack the alien mothership?`, //2
//     retreatYesOrNo: () => `Are you sure you want to retreat? Doing so will end the game...`, //3
//     win: () => `You've destroyed the entire enemy fleet and emerge victorious!`, //4
//     draw: () => `The enemy fleet manages to fend off your attack...for now.`, //5
//     lose: () => `The enemy fleet emerges victorious...a valient defeat.`, //6
//     thankYou: () => `Thank you for playing!`, //7
//     playAgain: () => `Do you want to play again?`, //8
//     bossEmerge: () => `The alien mothership emerges...` //9
//     }
//     }
//     /////Class Interaction Methods /////
//     alienAttackResult () {
//     const ussDodge = () => {this.ussSchwarzenegger.dodgeAttack();this.randomEnemySneakAttack(); this.ussCounterAttack()};
//     const ussTakeDamage = () => {this.ussSchwarzenegger.takeDamage(this.alienFleet[0]);this.randomEnemySneakAttack(); this.ussCounterAttack()};
//     const ussDestroyed = () => {this.ussSchwarzenegger.destroyed(); this.endGame()};
//     this.ussSchwarzenegger.currentHull === this.ussSchwarzenegger.startingHull ?
//     ussDodge() : (this.ussSchwarzenegger.currentHull > 0 ? ussTakeDamage() : ussDestroyed());
//     }
//     ussAttackResult () {
//     const alienDodge = () => {this.alienFleet[0].dodgeAttack(); this.enemyCounterAttack()};
//     const alienTakeDamge = () => {this.alienFleet[0].takeDamage(this.ussSchwarzenegger); this.enemyCounterAttack()};
//     const alienDestroyed = () => {this.alienFleet[0].destroyed();this.randomHealthBonus(); this.checkIfBossDefeated()};
//     this.alienFleet[0].startingShield > 0 ?
//     this.ussAttackResultShield() :
//     (this.alienFleet[0].currentHull === this.alienFleet[0].startingHull ?
//     alienDodge() : (this.alienFleet[0].currentHull > 0 ? alienTakeDamge() : alienDestroyed()));
//     }
//     ussAttackResultShield () {
//     const shieldDodge = () => {this.alienFleet[0].dodgeAttack(); this.enemyCounterAttack()};
//     const shieldTakeDamage =() => {this.alienFleet[0].takeShieldDamage(this.ussSchwarzenegger); this.enemyCounterAttack()};
//     const shieldDestroyed = () => {this.alienFleet[0].shieldDestroyed(this.ussSchwarzenegger); this.userChoice("attackOrRetreatBoss","attack","retreat","userAttack","userRetreat");};
//     this.alienBoss.currentShield === this.alienBoss.startingShield ?
//     shieldDodge() : ((this.alienBoss.currentShield > 0) ? shieldTakeDamage() : shieldDestroyed());
//     }
//     enemyCounterAttack () {
//     this.hitOrMiss(this.ussSchwarzenegger,this.alienFleet[0]);
//     this.alienFleet[0].attack(this.ussSchwarzenegger);
//     this.alienAttackResult();
//     }
//     ussCounterAttack () {
//     this.hitOrMiss(this.alienFleet[0],this.ussSchwarzenegger);
//     this.ussSchwarzenegger.attack(this.alienFleet[0]);
//     this.ussAttackResult();
//     }
//     enemySneakAttack () {
//     const ussDodgeSA = () => alert(this.ussSchwarzenegger.alerts["dodged"]());
//     const ussTakeDamageSA = () => {alert(this.ussSchwarzenegger.alerts["damaged"](this.alienFleet[1])); this.ussSchwarzenegger.updateStartingHall()};
//     const ussDestroyedSA = () => {this.ussSchwarzenegger.destroyed(); this.endGame()};
//     alert(this.alienFleet[1].alerts["multi"]());
//     this.hitOrMiss(this.ussSchwarzenegger,this.alienFleet[1]);
//     this.ussSchwarzenegger.currentHull === this.ussSchwarzenegger.startingHull ?
//     ussDodgeSA() : (this.ussSchwarzenegger.currentHull > 0 ? ussTakeDamageSA() : ussDestroyedSA());
//     }
//     ////Class Creation/Removal Methods/////
//     spawnAliens () {
//     for (let i = 0; i < this.userDifficulty; i ++) {
//     let alienShip = new Alien (this.randomAlienProps(3,6), this.randomAlienProps(2,4), this.randomAlienProps(6,8), 0);
//     this.alienFleet.push(alienShip);
//     }
//     this.startingFleetSize = this.alienFleet.length;
//     }
//     spawnBoss () {
//     this.alienFleet.push(this.alienBoss);
//     this.returnAlert("bossEmerge");
//     this.userChoice("attackOrRetreatBoss","attack","retreat","userAttack","userRetreat");
//     }
//     removeEnemy () {
//     this.alienFleet.shift();
//     this.checkIfAliensDefeated();
//     this.userChoice("attackOrRetreat","attack","retreat","userAttack","userRetreat");
//     }
//     /////Randomizer Methods/////
//     hitOrMiss (target,attacker) {
//     target.startingShield > 0 ?
//     (Math.random() <= attacker.accuracy ? target.currentShield -= attacker.firepower : target.currentShield -= 0) :
//     (Math.random() <= attacker.accuracy ? target.currentHull -= attacker.firepower : target.currentHull -= 0);
//     }
//     randomAlienProps (min, max) {
//     return Math.round(Math.random() * (max - min) + min);
//     }
//     randomEnemySneakAttack () {
//     (Math.random() <= .4) && (this.alienFleet.length > 1) ? this.enemySneakAttack() : false;
//     }
//     randomHealthBonus () {
//     this.alienFleet.length !== this.startingFleetSize ?
//     (Math.random() <= .7 ? (this.ussSchwarzenegger.currentHull += 1) && alert(this.ussSchwarzenegger.alerts["repaired"]()) : this.ussSchwarzenegger.currentHull += 0) :
//     false;
//     }
//     /////Messaging Methods////
//     userChoice (property,choice1,choice2,property1,property2) {
//     const outcomes = {
//     noviceDifficulty: () => this.userDifficulty = 6, //0
//     expertDifficulty: () => this.userDifficulty = 12, //1
//     userAttack: () => {this.hitOrMiss(this.alienFleet[0],this.ussSchwarzenegger);this.ussSchwarzenegger.attack(this.alienFleet[0]); this.ussAttackResult()}, //2
//     userRetreat: () => this.ussSchwarzenegger.retreat(), //3
//     retreatYes: () => this.endGame(), //4
//     retreatNo: () => this.alienFleet[0].loadinShield > 0 ? this.userChoice("attackOrRetreatBoss","attack","retreat","userAttack","userRetreat") : this.userChoice("attackOrRetreat","attack","retreat","userAttack","userRetreat"), //5
//     playAgainYes: () => {this.alienFleet.shift(); window.location.reload(true)}, //6
//     playAgainNo: () => {this.alienFleet.shift();this.returnAlert("thankYou")} //7
//     }
//     let userChoice = this.returnPrompt(property,choice1,choice2);
//     while ((userChoice !== choice1) && (userChoice !== choice2)) {
//     userChoice = prompt(`Please type either ${choice1} or ${choice2}.`,`${choice1}/${choice2}`);
//     }
//     return userChoice === choice1 ? outcomes[property1]() : outcomes[property2]();
//     }
//     returnPrompt (property,choice1,choice2) {
//     return prompt(this.messages[property](),`${choice1}/${choice2}`);
//     }
//     returnAlert (property) {
//     return alert(this.messages[property]());
//     }
//     changeMessages1 () {
//     return this.alienFleet.length === this.startingFleetSize ? `first` : (this.alienFleet.length > 1 ? `next` : `last`);
//     }
//     /////Game Progression Methods/////
//     startGame () {
//     this.userChoice("selectDifficulty","novice","expert","noviceDifficulty","expertDifficulty");
//     this.spawnAliens();
//     alert(`Now entering interstellar space...`);
//     alert(`Enemy ships approaching!`)
//     this.userChoice("attackOrRetreat","attack","retreat","userAttack","userRetreat");
//     }
//     checkIfBossDefeated () {
//     this.alienBoss.currentHull <= 0 ? this.endGame() : this.removeEnemy();
//     }
//     checkIfAliensDefeated () {
//     this.alienFleet.length === 0 ? this.spawnBoss() : false;
//     }
//     endGame () {
//     const win = () => this.returnAlert("win");
//     const draw = () => this.returnAlert("draw");
//     const lose = () => this.returnAlert("lose");
//     this.alienBoss.currentHull <= 0 ? win() : (this.ussSchwarzenegger.currentHull > 0 ? draw() : lose());
//     this.userChoice("playAgain","yes","no","playAgainYes","playAgainNo");
//     }
//     }
//     //////Start Game/////
//     const game = new GameLogic;
//     setTimeout(()=>game.startGame(), 1000);