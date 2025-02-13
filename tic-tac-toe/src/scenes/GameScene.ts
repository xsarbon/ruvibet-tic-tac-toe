import 'phaser';
export default class GameScene extends Phaser.Scene {

    private board: string[][] = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      private currentPlayer: string = "x";
      private cells: Phaser.GameObjects.Image[][] = [];
      private clickSound!: Phaser.Sound.BaseSound;

    constructor() {
        super('GameScene');
    }
    create() {
        this.clickSound = this.sound.add('click');

        for(let row=0;row<3;row++) {
            this.cells[row]=[];
            for(let col=0;col<3;col++) {
                const x=210*col+755;
                const y=210*row+330;
                const cell=this.add.rectangle(x,y,180,180,0xffffff).setStrokeStyle(2,0x000000).setInteractive();
            }
        }

        var Fondo=this.add.image(960,540,'Fondo');
    }

};