let closet = ["blouse-card", "dress-card", "brown-bag-card", "blue-bag-card", "glasses-card", "choker-card", "necklace-card", "hawaii-card", "sea-card"];
let stuff0, stuff1;
let selectedCard;
let outfit = [];
export default class GameScene extends Phaser.Scene {
    constructor() {
      super('gameScene')
    }

    preload() {
      this.load.image("scale-0", "assets/scale/scale-0.png");
      this.load.image("scale-1", "assets/scale/scale-1.png");
      this.load.image("scale-2", "assets/scale/scale-2.png");
      this.load.image("scale-3", "assets/scale/scale-3.png");

      this.load.image("blouse", "assets/characters/lexi-blouse.png");
      this.load.image("dress", "assets/characters/lexi-dress.png");
      this.load.image("blue-bag", "assets/clothes/blue-bag.png");
      this.load.image("brown-bag", "assets/clothes/brown-bag.png");
      this.load.image("glasses", "assets/clothes/glasses.png");
      this.load.image("choker", "assets/clothes/choker.png");
      this.load.image("necklace", "assets/clothes/necklace.png");

      this.load.image("brown-bag-card", "assets/select-an-item/brown-bag.png");
      this.load.image("blue-bag-card", "assets/select-an-item/blue-bag.png");
      this.load.image("glasses-card", "assets/select-an-item/glasses.png");
      this.load.image("choker-card", "assets/select-an-item/choker.png");
      this.load.image("necklace-card", "assets/select-an-item/necklace.png");
      this.load.image("hawaii-card", "assets/select-an-item/hawaii.png");
      this.load.image("sea-card", "assets/select-an-item/sea.png");

      this.load.image("hawaii", "assets/bg/hawaii.png");
      this.load.image("sea", "assets/bg/sea.png");

      this.load.image("paul", "assets/characters/paul.png");
      this.load.image("paul-text-1", "assets/text/paul-text-1.png");
      this.load.image("play-now", "assets/play-now.png");
    }
  
    create() {
      startGame(this);
    }
  };

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
  };

  function changeScale(sceneThis) {
    switch(sceneThis.countTaps) {
      case 1:
        sceneThis.scale.destroy();
        sceneThis.scale = sceneThis.scale = sceneThis.add.image(40, 30, "scale-1").setAlpha(0).setOrigin(0, 0);
      break;
      case 2:
        sceneThis.scale.destroy();
        sceneThis.scale = sceneThis.scale = sceneThis.add.image(40, 30, "scale-2").setAlpha(0).setOrigin(0, 0);
      break;
      case 3:
        sceneThis.scale.destroy();
        sceneThis.scale = sceneThis.scale = sceneThis.add.image(40, 30, "scale-3").setAlpha(0).setOrigin(0, 0);
      break;
      case 4:
        sceneThis.scale.destroy();
      break;
    }
    sceneThis.tweens.add({
      targets: sceneThis.scale,
      duration: 250,
      alpha: 1,
    });
  };

  function changeClothesLexi(index, sceneThis) {
    selectedCard = sceneThis.stuff[index].texture.key.slice(0, sceneThis.stuff[index].texture.key.length - 5);
    switch(selectedCard) {
      case "blouse":
        sceneThis.lexi.destroy();
        outfit.push(sceneThis.add.image(0, 0, `${selectedCard}`).setAlpha(0).setOrigin(0, 0));
      break;
      case "dress":
        sceneThis.lexi.destroy();
        outfit.push(sceneThis.add.image(0, 0, `${selectedCard}`).setAlpha(0).setOrigin(0, 0));
      break;
      case "brown-bag":
        outfit.push(sceneThis.add.image(45, 120, `${selectedCard}`).setAlpha(0).setOrigin(0, 0));
      break;
      case "blue-bag":
        outfit.push(sceneThis.add.image(0, 120, `${selectedCard}`).setAlpha(0).setOrigin(0, 0));
      break;
      case "glasses":
        outfit.push(sceneThis.add.image(135, 80, `${selectedCard}`).setAlpha(0).setScale(.6).setOrigin(0, 0));
      break;
      case "choker":
        outfit.push(sceneThis.add.image(120, 185, `${selectedCard}`).setAlpha(0).setOrigin(0, 0));
      break;
      case "necklace":
        outfit.push(sceneThis.add.image(130, 230, `${selectedCard}`).setAlpha(0).setScale(.6).setOrigin(0, 0));
      break;
      case "hawaii":
        sceneThis.bg = sceneThis.add.image(0, 0, `${selectedCard}`).setAlpha(0).setOrigin(0, 0);
      break;
      case "sea":
        sceneThis.bg = sceneThis.add.image(0, 0, `${selectedCard}`).setAlpha(0).setOrigin(0, 0);
      break;
    }
    sceneThis.lexiContainer = sceneThis.add.container(110, 30, outfit);
    outfit.forEach(e => {
      sceneThis.tweens.add({
        targets: e,
        duration: 250,
        alpha: 1,
      });
    }); 
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
            sceneThis.stuff.push(sceneThis.add.image(40, 560, `${stuff0}`).setAlpha(.4).setOrigin(0, 0), sceneThis.add.image(310, 560, `${stuff1}`).setAlpha(.4).setOrigin(0, 0));
          break;
          case 2:
            sceneThis.stuff = [];
            stuff0 = closet[4];
            stuff1 = closet[5];
            sceneThis.stuff.push(sceneThis.add.image(40, 560, `${stuff0}`).setAlpha(.4).setOrigin(0, 0), sceneThis.add.image(310, 560, `${stuff1}`).setAlpha(.4).setOrigin(0, 0));
          break;
          case 3:
            sceneThis.stuff = [];
            stuff0 = closet[6];
            stuff1 = closet[7];
            sceneThis.stuff.push(sceneThis.add.image(40, 560, `${stuff0}`).setAlpha(.4).setOrigin(0, 0), sceneThis.add.image(310, 560, `${stuff1}`).setAlpha(.4).setOrigin(0, 0));
          break;
        };
      break;
    };
    sceneThis.stuff.forEach(e => {
      sceneThis.tweens.add({
        targets: e,
        duration: 250,
        alpha: 1,
      });
    })
  };

  function endGame(sceneThis) {
    switch(sceneThis.countTaps) {
      case 4:
        sceneThis.tweens.add({
          targets: sceneThis.bg,
          duration: 250,
          alpha: 1,
        })
        delete sceneThis.stuff;
        sceneThis.tweens.add({
          targets: sceneThis.add.image(310, 0, "paul").setDepth(1).setOrigin(0, 0),
          duration: 190,
          x: 110,
        });
        sceneThis.tweens.add({
          targets: sceneThis.lexiContainer.setDepth(2),
          duration: 190,
          x: 0,
        });

        setTimeout(() => {
          sceneThis.tweens.add({
            targets: sceneThis.paulText1 = sceneThis.add.image(80, 480, "paul-text-1").setAlpha(0).setDepth(3).setOrigin(0, 0),
            duration: 360,
            alpha: 1,
          });
          setTimeout(() => {
            sceneThis.tweens.add({
              targets: sceneThis.paulText1,
              duration: 360,
              alpha: 0,
            });
            sceneThis.playNow = sceneThis.add.image(100, 800, "play-now").setDepth(3).setOrigin(0, 0);
            sceneThis.playNow.setInteractive();
            sceneThis.playNow.on("pointerdown", () => location.reload());
          }, 900);
        }, 300);
    }
  };

  function startGame(sceneThis) {
    creatFirstedObjects(sceneThis);
    sceneThis.countTaps = 0;
    sceneThis.stuff.forEach((e, i) => {
      e.setInteractive();
      e.on("pointerdown", () => {
        sceneThis.countTaps += 1;
        changeScale(sceneThis);
        changeClothesLexi(i, sceneThis);
        changeCards(e, sceneThis);
        endGame(sceneThis);
      });
    });
  };