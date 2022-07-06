export default class Intro extends Phaser.Scene {
    constructor() {
      super('intro')
    }

    preload() {
      this.load.image("room",  "assets/bg/room.png");
      this.load.image("shadow",  "assets/bg/shadow.png");
      this.load.image("paul",  "assets/characters/paul.png");
      this.load.image("lexi",  "assets/characters/lexi-0.png");
      this.load.image("paul-text", "assets/text/paul-text-0.png")
      this.load.image("lexi-text", "assets/text/lexi-text.png");

      this.load.audio("shared-music", "assets/shared-music.mp3");
    }
  
    create() {
      this.music = this.sound.add("shared-music");
        let musicConfig = {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0,
        };
      this.music.play(musicConfig);

      this.add.image(0, 0, "room").setOrigin(0, 0);
      this.add.image(0, 0, "shadow").setOrigin(0, 0);
      this.paul = this.add.image(-30, -30, "paul").setOrigin(0, 0).setScale(1.2);
      this.paulText = this.add.image(300, 480, "paul-text");
      this.lexi = this.add.image(-530, 0, "lexi").setOrigin(0, 0);
      this.lexiText = this.add.image(-530, 400, "lexi-text").setOrigin(0, 0);
    
      setTimeout(() => {
        this.tweens.add({
          targets:[this.paul, this.paulText, this.lexi, this.lexiText],
          props: {
              x: { value: "+= 600", duration: 300, ease: "Power1"},
          },
        });
      }, 750);

      setTimeout(() => {
        this.scene.start("tutorial")
      }, 1500);
    }
  }