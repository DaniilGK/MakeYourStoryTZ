import Phaser from 'phaser'
import intro from "./intro"

let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    scene: [intro],
}

let game = new Phaser.Game(config)