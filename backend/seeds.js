var mongoose = require("mongoose");
require("./models/User");
require("./models/Item");
var Item = mongoose.model("Item");

mongoose.connect("mongodb://127.0.0.1:27017");

// seed database
const seed = async () => {
  for (let index = 0; index < 110; index++) {
    const item = new Item({
      title: `Item ${index}`,
      description: `Item ${index} description`,
    });
    await item.save().then(
      (result) => {
        console.log(result);
        console.log(`Item ${index} saved`);
      },
      () => {
        console.log(`Item ${index} not saved`);
      }
    );
  }
  console.log("seed done");
};

seed();
process.exit();
