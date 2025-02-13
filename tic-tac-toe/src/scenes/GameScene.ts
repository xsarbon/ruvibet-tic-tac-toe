import 'phaser';
import VictoryMessege from './VictoryMessege';
export default class GameScene extends Phaser.Scene {

    private board: string[][] = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    private currentPlayer: string;
    private cells: Phaser.GameObjects.Image[][] = [];
    private clickSound!: Phaser.Sound.BaseSound;
    private timer: Phaser.Time.TimerEvent;
    private timeLeft: number = 10;
    private timerText: Phaser.GameObjects.Text;
    

    constructor() {
        super('GameScene');
    }

    init(data: { playerSymbol: string }) {
        this.currentPlayer = data.playerSymbol;        
    }
    

    create() {
        this.resetGame();
        this.clickSound = this.sound.add('click');

        this.timerText = this.add.text(960, 120, `Tiempo: ${this.timeLeft}s`, {
            fontSize: "40px",
            color: "#000",
            fontFamily: "Arial",
            fontStyle: "bold"
        }).setOrigin(0.5, 0.5);

        this.startTimer();

        for (let row = 0; row < 3; row++) {
            this.cells[row] = [];
            for (let col = 0; col < 3; col++) {
                const x = 210 * col + 755;
                const y = 210 * row + 330;

                const cell = this.add.rectangle(x, y, 180, 180, 0xffffff).setStrokeStyle(2, 0x000000).setInteractive();

                cell.on('pointerdown', () => this.handleCellClick(row, col, cell));

                this.cells[row][col] = this.add.image(x, y, "").setVisible(false);
            }
        }

        var Fondo = this.add.image(960, 540, 'Fondo');
    }


    resetGame() {
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
        this.cells.forEach(row => {
            row.forEach(cell => {
                cell.setVisible(false);
            });
        });
    }



    handleCellClick(row: number, col: number, cell: Phaser.GameObjects.Rectangle) {
        if (this.board[row][col] !== "") return;
        this.board[row][col] = this.currentPlayer;
        this.clickSound.play();
        const playerImg=this.add.image(cell.x, cell.y, `${this.currentPlayer}`).setScale(0);
        this.tweens.add({
            targets: playerImg,
            alpha:1,
            scaleX:0.5,
            scaleY:0.5,
            duration: 500,
            ease: 'Power2'
        });


        if(this.isBoardFull()){
            this.time.delayedCall(500, () => this.scene.start("DrawMessege"));
        }else if(this.checkWinner(this.currentPlayer)){
            this.time.delayedCall(500, () => this.scene.start("VictoryMessege", { winner: this.currentPlayer }));
        }else{
            this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
            this.startTimer();
        }

    }
    checkWinner(player: string): boolean {
        for (let i = 0; i < 3; i++) {
            if (
                this.board[i][0] === player && this.board[i][1] === player && this.board[i][2] === player || //filas
                this.board[0][i] === player && this.board[1][i] === player && this.board[2][i] === player    //columnas
            ) {
                return true;
            }
        }

        if ( //diagonales
            this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player ||
            this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player
        ) {
            return true;
        }return false;
    }
    isBoardFull(): boolean {
        return this.board.every(row => row.every(cell => cell !== ""));
    }

    startTimer() {
        // Restablecer el tiempo
        this.timeLeft = 10;
        this.timerText.setText(`${this.timeLeft}`);

        // Cancelar cualquier temporizador anterior
        if (this.timer) {
            this.timer.remove();
        };

        this.timer = this.time.addEvent({
            delay: 1000,  // 1 segundo
            loop: true,   // Repetir cada segundo
            callback: () => {
                this.timeLeft--;
                this.timerText.setText(`${this.timeLeft}`);

                // Si el tiempo se acaba, cambiar al siguiente jugador
                if (this.timeLeft <= 0) {
                    this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
                    this.startTimer();  // Reiniciar el temporizador
                }
            }
        });
    
}};