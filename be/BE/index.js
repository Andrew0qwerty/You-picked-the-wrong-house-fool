const client = require("./db");

client.connect((err) => {
  if (err) throw err;
  const collection = client.db("mongo").collection("users");
  collection.find({}).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    client.close();
  });
});
