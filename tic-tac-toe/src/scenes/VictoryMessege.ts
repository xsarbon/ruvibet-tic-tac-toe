import Phaser from "phaser";

export default class VictoryMessege extends Phaser.Scene {
  constructor() {
    super("VictoryMessege");
  }
  create(){
    this.add.image(960,560,"Reload").setScale(0.1);
  }
}