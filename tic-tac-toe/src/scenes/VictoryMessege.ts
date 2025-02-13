import Phaser from "phaser";

export default class VictoryMessege extends Phaser.Scene {

    private winnerMessege!:Phaser.GameObjects.Text;

  constructor() {
    super("VictoryMessege");
  }

  init(data:{winner:string}){
    let messege:string=`El ganador es: ${data.winner.toUpperCase()}!`; 
    this.winnerMessege = this.add.text(850, 250, messege,
        {
            fontSize:"32px",
            color:"#000",
            fontFamily:"Helvetica"
        }
    );
  }

  create(){
    var reloadButton=this.add.image(960,560,"Reload");
    reloadButton.setScale(0.1);
    reloadButton.setInteractive();
    reloadButton.on('pointerdown', function (event) {
        this.scene.start('GameScene');
      }, this);
  }
}