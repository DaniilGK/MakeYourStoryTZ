export default class intro extends Phaser.Scene {
    constructor() {
      super('intro')
    }
  
    create() {
      this.add.text(20, 20, 'Loading..')
  
      setTimeout(() => {
        this.scene.start('game')
      }, 2000)
    }
  }