import { config } from 'dotenv';
// import { MongoClient } from 'mongodb';


// async function connectToCluster() {
// 	let mongoClient;

// 	try {
// 		mongoClient = new MongoClient("mongodb+srv://rinn:rinn@dev-cluster.s2g8r6v.mongodb.net/");
// 		console.log('Connecting to MongoDB Atlas cluster...');
// 		await mongoClient.connect();
// 		console.log('Successfully connected to MongoDB Atlas!');

// 		return mongoClient;
// 	} catch (error) {
// 		console.error('Connection to MongoDB Atlas failed!', error);
// 		process.exit();
// 	}
// }
// export async function load({ params }) {
// 	let mongoClient;
// 	let collection;
// 	try {
// 		mongoClient = await connectToCluster();
// 		const db = mongoClient.db('form');
// 		collection = db.collection('formData');
// 	} finally {

// 	}
// 	const user = collection.find().toArray()

// 	console.log(user);
// 	// let id = user._id;
// 	// let home = user.home;
// 	// let propertyPurchase =  user.propertyPurchase;
// 	// let propertyLocationState =  user.propertyLocationState;
// 	// let user.propertyLocationCity;
// 	// let user.workingLocationState;
// 	// let user.workingLocationCity;
// 	// let user.masterPlan;
// 	// let user.propertyType;
// 	// let user.propertiesOwned;
// 	// let user.referralName;
// 	// let user.referralNo;
// 	// let user.usernName;
// 	// let user.userNo;
// 	// let user.userMail;
// 	// let user.currentFinancialName;
// 	// let user.roi;
// 	// let user.currentFinanciallocation;
// 	// let newData = [];
// 	// for (const key in user) {
// 	// 	if (user.hasOwnProperty(key)) {
// 	// 		 newData.push(`${key}: ${user[key]}`);
// 	// 	}
// 	//   }
// 	let newData = JSON.stringify(user)
// 	return { newData };
// 	// console.log(keyValue);
// }
import { db } from "$lib/database/mongo";
export const prerender = true;
export async function load() {
	const userData = await db.collection('formData').find().toArray()
	let adminData = JSON.stringify(userData);
	return {
	 adminData 
	}
}
config();