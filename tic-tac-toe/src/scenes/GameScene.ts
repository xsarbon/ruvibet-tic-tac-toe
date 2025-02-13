import 'phaser';
import VictoryMessege from './VictoryMessege';
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

                cell.on('pointerdown',()=>this.handleCellClick(row,col,cell));

                this.cells[row][col]=this.add.image(x,y,"").setVisible(false);
            }
        }

        var Fondo=this.add.image(960,540,'Fondo');
    }

    handleCellClick(row:number,col:number,cell:Phaser.GameObjects.Rectangle){
        if (this.board[row][col] !== "") return;
        this.board[row][col]=this.currentPlayer;
        this.clickSound.play();
        const symbol = this.add.image(cell.x, cell.y, this.currentPlayer.toLowerCase());
        symbol.setScale(0);
        this.add.image(cell.x, cell.y,`${this.currentPlayer}`).setScale(0.5);

        if (this.checkWinner()) {
            this.time.delayedCall(500, () => this.scene.start("VictoryMessege", { winner: this.currentPlayer }));
          } else {
            this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
          }
        }
};