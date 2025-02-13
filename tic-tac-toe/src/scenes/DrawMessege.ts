import Phaser from "phaser";

export default class DrawMessege extends Phaser.Scene {
    private drawMessege!:Phaser.GameObjects.Text;
  constructor() {
    super("DrawMessege");
  }
  preload() {
    var messege:string="Empate! Pueden volver a jugar.";
    this.drawMessege = this.add.text(960, 250, messege,
      {
        fontSize: '32px',
        color: '#000',
        fontFamily: 'Helvetica',
      }
    );
    this.drawMessege.setOrigin(0.5, 0.5);
  }

  create(){
    var reload=this.add.image(960,560,"Reload").setScale(0.1);
    reload.setInteractive();
    reload.on('pointerdown', function (event) {
      this.scene.start('GameScene');
    }, this);
  }
}