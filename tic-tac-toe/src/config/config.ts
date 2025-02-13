import PreloadScene from "../scenes/PreloadScene";
import GameScene from "../scenes/GameScene";
import VictoryMessege from '../scenes/VictoryMessege';
import DrawMessege from '../scenes/DrawMessege';
import SelectPlayer from "../scenes/SelectPlayer";

export default{
    type: Phaser.AUTO,
    width:1920,
    height:1080,
    backgroundColor:'#d3d3d3',
    scene: [PreloadScene, SelectPlayer, GameScene, VictoryMessege,DrawMessege],
};