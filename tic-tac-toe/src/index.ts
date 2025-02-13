import 'phaser';
import config from './config/config';
import PreloadScene from './scenes/PreloadScene';
import GameScene from './scenes/GameScene';

class Game extends Phaser.Game{
    constructor(){
        super(config);
        scene: [PreloadScene, GameScene];
    }
}

window.onload=function(){
    var game = new Game();
}