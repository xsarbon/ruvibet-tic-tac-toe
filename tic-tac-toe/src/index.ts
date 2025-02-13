import 'phaser';
import config from './config/config';

class Game extends Phaser.Game{
    constructor(){
        super(config);
    }
}

window.onload=function(){
    var game = new Game();
}