 const mongoose = require('mongoose'); 

module.exports = function() {
    const uri = process.env.ATLAS_URI;
    mongoose.connect('mongodb+srv://admin:admin@cluster0.yxenc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
    const connection = mongoose.connection;
    connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
    });


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:admin@serverlessinstance0.yxenc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

}