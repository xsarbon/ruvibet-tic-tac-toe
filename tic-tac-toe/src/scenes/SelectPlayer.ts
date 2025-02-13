import Phaser from "phaser";
export default class SelectPlayer extends Phaser.Scene{
    private messegeSelect!:Phaser.GameObjects.Text;
    constructor(){
        super('SelectPlayer');
    }
    create(){
        let messege:string="Por favor elija un jugador";
        this.messegeSelect = this.add.text(960, 250, messege,
            {
                fontSize:"32px",
                color:"#000",
                fontFamily:"Helvetica"
            }
        );
        this.messegeSelect.setOrigin(0.5, 0.5);
        var opt1=this.add.image(700,600,"x");
        var opt2=this.add.image(1200,600,"o");
        opt1.setScale(0.4);
        opt2.setScale(0.4);
        opt1.setInteractive();
        opt2.setInteractive();
        opt1.on('pointerdown', function (event) {
            this.scene.start('GameScene', { playerSymbol: 'x' });
        }, this);
        
        opt2.on('pointerdown', function (event) {
            this.scene.start('GameScene', { playerSymbol: 'o' });
        }, this);
        
        
    }

}