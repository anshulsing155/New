import { MongoClient } from 'mongodb';
import { DB_URI } from '$env/static/private';
const uri = DB_URI;
export async function connectToCluster() {
    let mongoClient;

    try {
        mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}

// export async function connectDB() {
//     try {
//       await client.connect();
//       console.log('Connected to MongoDB');
//       return client.db();
//     } catch (err) {
//       console.error('Error connecting to MongoDB:', err);
//     }
//   }