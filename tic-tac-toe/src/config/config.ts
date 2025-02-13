import PreloadScene from "../scenes/PreloadScene";
import GameScene from "../scenes/GameScene";

export default{
    type: Phaser.AUTO,
    width:1920,
    height:1080,
    backgroundColor:'#d3d3d3',
    scene: [PreloadScene,GameScene ]
};