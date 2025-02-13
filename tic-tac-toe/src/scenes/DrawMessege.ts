import Phaser from "phaser";

export default class DrawMessege extends Phaser.Scene {
  constructor() {
    super("DrawMessege");
  }
  create(){
    this.add.image(960,560,"x").setScale(0.1);
  }
}