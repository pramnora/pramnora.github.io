var game = new Phaser.Game(648,360,Phaser.AUTO);

var GameState = {

 //*** load the game assets before the  game starts... 

 preload: function(){
  this.load.image('background','assets/images/background.png');
 },

 //*** executed after everything is loaded...

 create: function(){
  this.background = this.game.add.sprite(0,0,'background');
 },

 //*** this is executed multiple times per second...

 update: function(){
  
 },

};

//*** initialise the phaser framework...

game.state.add('GameState',GameState);
game.state.start('GameState');

