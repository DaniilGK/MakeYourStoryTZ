let closet = ["blouse-card", "dress-card", "brown-bag-card", "blue-bag-card", "glasses-card", "choker-card", "necklace-card", "hawaii-card", "sea-card"];
let stuff0, stuff1;
export default class GameScene extends Phaser.Scene {
    constructor() {
      super('gameScene')
    }

    preload() {
      this.load.image("lexi-blouse", "assets/scale/scale-0.png");
      this.load.image("lexi-dress", "assets/scale/scale-0.png");

      this.load.image("scale-0", "assets/scale/scale-0.png");
      this.load.image("scale-1", "assets/scale/scale-1.png");
      this.load.image("scale-2", "assets/scale/scale-2.png");
      this.load.image("scale-3", "assets/scale/scale-3.png");

      this.load.image("brown-bag-card", "assets/select-an-item/brown-bag.png");
      this.load.image("blue-bag-card", "assets/select-an-item/blue-bag.png");
      this.load.image("glasses-card", "assets/select-an-item/glasses.png");
      this.load.image("choker-card", "assets/select-an-item/choker.png");
      this.load.image("necklace-card", "assets/select-an-item/necklace.png");
      this.load.image("hawaii-card", "assets/select-an-item/hawaii.png");
      this.load.image("sea-card", "assets/select-an-item/sea.png");

      this.load.image("hawaii", "assets/bg/hawaii.png");
      this.load.image("sea", "assets/bg/sea.png");
    }
  
    create() {
      creatFirstedObjects(this);
      startGame(this);
    }

    update() {
    }
  }

  function creatFirstedObjects(sceneThis) {
    sceneThis.bg = sceneThis.add.image(0, 0, "room").setOrigin(0, 0);
    sceneThis.lexi = sceneThis.add.image(110, 30, "lexi-1").setOrigin(0, 0);
    sceneThis.scale = sceneThis.add.image(40, 30, "scale-0").setOrigin(0, 0).setAlpha(0);
    sceneThis.tweens.add({
      targets: sceneThis.scale,
      duration: 300,
      alpha: 1,
    });

    stuff0 = closet[0];
    stuff1 = closet[1];
    sceneThis.stuff = [sceneThis.add.image(40, 560, `${stuff0}`).setOrigin(0, 0), sceneThis.add.image(310, 560, `${stuff1}`).setOrigin(0, 0)];
  }

  function changeScale(sceneThis) {
    switch(sceneThis.countTaps) {
      case 1:
        sceneThis.scale.destroy();
        sceneThis.scale = sceneThis.scale = sceneThis.add.image(40, 30, "scale-1").setOrigin(0, 0);
      break;
      case 2:
        sceneThis.scale.destroy();
        sceneThis.scale = sceneThis.scale = sceneThis.add.image(40, 30, "scale-2").setOrigin(0, 0);
      break;
      case 3:
        sceneThis.scale.destroy();
        sceneThis.scale = sceneThis.scale = sceneThis.add.image(40, 30, "scale-3").setOrigin(0, 0);
      break;
      case 4:
        sceneThis.scale.destroy();
      break;
    }
  };

  function changeCards(item, sceneThis) {
    switch(closet.length) {
      case 9:
        switch(item.texture.key) {
          case "dress-card":
            closet = closet.filter(e => e != "necklace-card");
          break;
          case "blouse-card":
            closet = closet.filter(e => e != "choker-card");
          break;
        };
      case 8:
        switch(sceneThis.countTaps) {
          case 1:
            sceneThis.stuff = [];
            stuff0 = closet[2];
            stuff1 = closet[3];
            sceneThis.stuff.push(sceneThis.add.image(40, 560, `${stuff0}`).setOrigin(0, 0), sceneThis.add.image(310, 560, `${stuff1}`).setOrigin(0, 0));
          break;
          case 2:
            sceneThis.stuff = [];
            stuff0 = closet[4];
            stuff1 = closet[5];
            sceneThis.stuff.push(sceneThis.add.image(40, 560, `${stuff0}`).setOrigin(0, 0), sceneThis.add.image(310, 560, `${stuff1}`).setOrigin(0, 0));
          break;
          case 3:
            sceneThis.stuff = [];
            stuff0 = closet[6];
            stuff1 = closet[7];
            sceneThis.stuff.push(sceneThis.add.image(40, 560, `${stuff0}`).setOrigin(0, 0), sceneThis.add.image(310, 560, `${stuff1}`).setOrigin(0, 0));
          break;
          // case 4:
          // break;
        };
      break;
    };
  };



  function startGame(sceneThis) {
    sceneThis.countTaps = 0;
    sceneThis.stuff.forEach(e => {
      e.setInteractive();
      e.on("pointerdown", () => {
        sceneThis.countTaps += 1;
        changeScale(sceneThis)
        changeCards(e, sceneThis);
      });
    });
  };