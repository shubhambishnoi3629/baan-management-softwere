// waterClass.js
class WaterClass {
  water = {
    quantity: 0,
    TDS: 0,
  };

  constructor(initialWater = 0, TDS = 55) {
    this.water.quantity = initialWater;
    this.water.TDS = TDS;
  }

  getWater() {
    return {
      ...this.water
    };
  }

  drinkWater() {
    this.water.quantity--;
  }

  checkRemainingWater() {
    console.log(this.water);
  }
}

// index.js
(() => {

const kund = new WaterClass(55);

// drink water
kund.drinkWater();
kund.drinkWater();
kund.drinkWater();

// check water
kund.checkRemainingWater();

})()

// waterFunction.js
const drinkWater = (initialWater) => {
  initialWater.quantity--;
}

const checkRemainingWater = (water) => {
  console.log(water);
}

// index.js
(() => {

  let water = {
    quantity: 55,
    TDS: 55
  };

  drinkWater(water);
  drinkWater(water);
  drinkWater(water);
  drinkWater(water);

  checkRemainingWater(water);

})()