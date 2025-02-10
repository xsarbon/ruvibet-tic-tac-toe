import 'phaser';
export default class Example extends Phaser.Scene{
    constructor(){
        super('Example');
    }
    preload(){
        this.load.image('Fondo','assets/Board.png');
    }
    create(){
        var Fondo=this.add.image(309,309,'Fondo');
    }
}