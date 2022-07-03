export default class Tutorial extends Phaser.Scene {
    constructor() {
      super('tutorial')
    }

    preload() {
      this.load.image("dress-text", "assets/text/dress.png");
      this.load.image("lexi-1", "assets/characters/lexi-1.png");
      this.load.image("stuff-0", "assets/select-an-item/blouse.png");
      this.load.image("stuff-1", "assets/select-an-item/dress.png");
      this.load.image("hand", "assets/hand.png");
    }
  
    create() {
      this.add.image(0, 0, "room").setOrigin(0, 0);
      this.shadow = this.add.image(0, 0, "shadow").setOrigin(0, 0); 
      this.lexi = this.add.image(70, 0, "lexi").setOrigin(0, 0);
      this.hint = this.add.image(60, 20, "dress-text").setOrigin(0, 0).setAlpha(0);
      
      this.tweens.add({
        targets: [this.shadow, this.lexi],
        duration: 100,
        alpha: 0,
      });

      this.lexi = this.add.image(110, 30, "lexi-1").setOrigin(0, 0);
      this.stuff = [this.add.image(40, 560, "stuff-0").setOrigin(0, 0).setAlpha(0), this.add.image(310, 560, "stuff-1").setOrigin(0, 0).setAlpha(0)];
      
      this.stuff.forEach(e => {
        this.tweens.add({
          targets: e,
          duration: 300,
          alpha: 1,
        });
      });

      this.tweens.add({
        targets: this.hint,
        duration: 300,
        alpha: 1,
      });

      this.hand = this.add.image(550, 950, "hand");

      setTimeout(() => {
        this.tweens.add({
          targets: this.hand,
          props: {
            x: {value: 210, duration: 550, ease: "Power1"},
            y: {value: 840, duration: 550, ease: "Power1"},
          }
        });
      }, 500);
    }

    update() {
      switch(this.hand.x) {
        case 210:
          setTimeout(() => {
            this.tweens.add({
              targets: this.hand,
              props: {
                x: {value: 510, duration: 550, ease: "Power1"},
              }
            });
          }, 300);
          break;
          case 510:
            setTimeout(() => {
              this.tweens.add({
                targets: this.hand,
                props: {
                  x: {value: 670, duration: 550, ease: "Power1"},
                  y: {value: 950, duration: 550, ease: "Power1"},
                }
              });
            }, 200);
            break;
            case 670:
              this.scene.start("gameScene");
              break;
      }
    }
  }