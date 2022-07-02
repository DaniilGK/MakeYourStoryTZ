import Phaser from 'phaser'
import Welcome from './Welcome'
import Game from './Game'

const config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [Welcome, Game]
}

const game = new Phaser.Game(config)