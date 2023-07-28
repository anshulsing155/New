import { connectToCluster } from '$lib/database/mongo.js';
import { MongoClient } from 'mongodb';
export const actions = {

    default: async ({ request }) => {

        const formData = await request.formData();
        const username = formData.get("email")
        const password = formData.get("password")
        console.log({ username, password })
        await connectToCluster();
        async function executeCrudOperations() {
            const uri = process.env.DB_URI;
            let mongoClient;
            try {
                mongoClient = await connectToCluster(uri);
                const db = mongoClient.db('adminData');
                const collection = db.collection('admin');
                console.log('CREATE User');
                // Check if the user already exists
                const existingUser = await collection.findOne({ username });
                if (existingUser) {
                    console.log("Username already exists")
                    return { success: false, message: 'Username already exists' };
                }
                else{
                    const newUser = { username, password };
                await collection.insertOne(newUser);
                console.log("User created successfully")
                return { success: true, message: 'User created successfully' };
            
                }
                
                // await createStudentDocument(collection);
            } finally {
                await mongoClient.close();
            }

            // let data = db.admin.find({ username })
            // console.log(data)

            //     async function executeCrudOperations() {
            //         const uri = process.env.DB_URI;
            //         let mongoClient;

            //         try {
            //             mongoClient = await connectToCluster(uri);
            //             const db = mongoClient.db('adminData');
            //             const collection = db.collection('admin');
            //             console.log('CREATE User');
            //             await createStudentDocument(collection);
            //         } finally {
            //             await mongoClient.close();
            //         }























            //         async function adminLogin() {

            //         }
            //         async function createStudentDocument(collection) {
            //             const studentDocument = {





            //             };

            //             await collection.insertOne(studentDocument);
            //         }


            //         config();
            //         await executeCrudOperations();
            
                }
            executeCrudOperations()
        }
    }
