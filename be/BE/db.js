const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://andriy_los:qwerty64@cluster0.yolrj7r.mongodb.net/mongo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client;
