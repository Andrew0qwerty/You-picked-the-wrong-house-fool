const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://andriy_los:qwerty256@cluster0.yolrj7r.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client;
