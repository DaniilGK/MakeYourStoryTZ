import Phaser from "phaser"
import intro from "./intro"
import tutorial from "./tutorial"
import gameScene from "./gameScene"

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 900,
  scene: [intro, tutorial, gameScene],
}

const game = new Phaser.Game(config)