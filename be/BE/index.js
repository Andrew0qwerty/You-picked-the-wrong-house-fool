const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://andriy_los:qwerty64@cluster0.yolrj7r.mongodb.net/mongo?retryWrites=true&w=majority"
);

const start = async () => {
  try {
    await client.connect();

    console.log("connected");

    await client.db().createCollection("users");

    const users = client.db().collection("users");

    await users.insertOne({ name: "petya", age: 21 });

    const user = await users.findOne({ name: "petya" });

    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

start();
