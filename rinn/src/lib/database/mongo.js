import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

export async function connectToCluster() {
    let mongoClient;

    try {
        mongoClient = new MongoClient("mongodb+srv://rinn:rinn@dev-cluster.s2g8r6v.mongodb.net/");
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}
export async function connect() {
    let mongoClient
    try {
    
      console.log('Connected to MongoDB');
      return mongoClient.db('userLogin'); // Replace 'mydatabase' with your database name
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  }