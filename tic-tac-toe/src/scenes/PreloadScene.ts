import 'phaser';
export default class PreloadScene extends Phaser.Scene{
    constructor(){
        super('PreloadScene');
    }
    preload(){
        this.load.image("playButton", "assets/Play.png");
        this.load.image("x", "assets/X.png");
        this.load.image('Fondo','assets/Board.png');
        this.load.image('o','assets/O.png');
        this.load.audio('click', "assets/Tap.mp3");
        this.load.image('Reload',"assets/Reload.png");
    }
    create(){
        var playButton=this.add.image(960,500,'playButton');
        playButton.setScale(0.2);
        playButton.setInteractive();
        playButton.on('pointerdown',function (event) {
            this.scene.start('SelectPlayer');
        }, this);
    }
}