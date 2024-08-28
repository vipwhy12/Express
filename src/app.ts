const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const mongodbPassword = process.env.DB_PASS;
const uri = `mongodb+srv://vipwhy12:${mongodbPassword}@express.rm1fw.mongodb.net/?retryWrites=true&w=majority&appName=express`;
require("dotenv").config();
const app = express();
const port: number = 3000;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
