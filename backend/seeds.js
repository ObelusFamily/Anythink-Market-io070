require("dotenv").config();

var mongoose = require("mongoose");
require("./models/User");
require("./models/Item");
require("./models/Comment");
var Item = mongoose.model("Item");
var User = mongoose.model("User");
var Comment = mongoose.model("Comment");

mongoose.connect(process.env.MONGODB_URI);

// seed database with users
const seedUsers = async () => {
  for (let index = 0; index < 100; index++) {
    const user = new User({
      username: `user${index}`,
      email: `email${Math.random()}@gmail.com`,
    });

    await user.save().then((user) => {
      console.log(`User ${user.username} created`);
    });
  }
  console.log("!!!!!!!! Users seeding done");
};

// seed database with items
const seedItems = async () => {
  for (let index = 0; index < 100; index++) {
    const item = new Item({
      title: `Item ${index}`,
      description: `Item ${index} description`,
    });
    await item.save().then(
      (result) => {
        console.log(`Item ${index} saved`);
      },
      () => {
        console.log(`Item ${index} not saved`);
      }
    );
  }
  console.log("!!!!!!!! Items seeding done");
};

const seedComments = async () => {
  for (let index = 0; index < 100; index++) {
    const comment = new Comment({
      body: `Comment ${index}`,
    });

    await comment.save().then((comment) => {
      console.log(`Comment ${index} saved`);
    });
  }
  console.log("!!!!!!!! Comments seeding done");
};

(async () => {
  await seedUsers();
  await seedItems();
  await seedComments();

  process.exit();
})();
