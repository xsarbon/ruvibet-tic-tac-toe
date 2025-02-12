import 'phaser';
export default class Example extends Phaser.Scene{
    constructor(){
        super('Example');
    }
    preload(){
        this.load.image('Fondo','assets/Board.png');
        this.load.image("playButton", "assets/Play.png");
    }
    create(){
        var Fondo=this.add.image(960,450,'Fondo');
        var playButton=this.add.image(960,900,'playButton').setScale(0.05);
    }
    update(time: number, delta: number){
        
    }
}