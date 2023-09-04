import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
import { fail } from '@sveltejs/kit';
// import { writeFileSync } from 'fs';

async function connectToCluster() {
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

let home, propertyPurchase, propertyLocationState, propertyLocationCity, workingLocationState, workingLocationCity, masterPlan, propertyType, propertiesOwned, referralName, referralNo, usernName, userNo, userMail, currentFinancialName, roi, currentFinanciallocation;
// export function load({ cookies }) {
//     home = cookies.get('Requirment');
//     propertyPurchase = cookies.get('Stage of Property purchase');
//     propertyLocationState = cookies.get('Property Location (State)');
//     propertyLocationCity = cookies.get('Property Location (City)');
//     workingLocationState = cookies.get('Working Location (State)');
//     workingLocationCity = cookies.get('Working Location (City)');
//     currentFinancialName = cookies.get('Current Financial Name');
//     currentFinanciallocation = cookies.get('Current Financial Location');
//     roi = cookies.get('Current Financial ROI');
//     referralName = cookies.get('Referral Code (Name)');
//     referralNo = cookies.get('Referral Code(Mobile No.)');
//     usernName = cookies.get('User (Name)');
//     userNo = cookies.get('User (Mobile No.)');
//     userMail = cookies.get('User (Email)');

// }

export const actions = {
    default: async ({request,cookies }) => {
    //   const formData = Object.fromEntries(await request.formData());
    //   if (
    //     !(formData.fileToUpload as File).name ||
    //     (formData.fileToUpload as File).name === 'undefined'
    //   ) {
    //     return fail(400, {
    //       error: true,
    //       message: 'You must provide a file to upload'
    //     });
    //   }
    //   const { fileToUpload } = formData as { fileToUpload: File };
    // writeFileSync(`static/userfiles/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));
    
    
        home = cookies.get('Requirment');
        propertyPurchase = cookies.get('Stage of Property purchase');
        propertyLocationState = cookies.get('Property Location (State)');
        propertyLocationCity = cookies.get('Property Location (City)');
        workingLocationState = cookies.get('Working Location (State)');
        workingLocationCity = cookies.get('Working Location (City)');
        currentFinancialName = cookies.get('Current Financial Name');
        currentFinanciallocation = cookies.get('Current Financial Location');
        roi = cookies.get('Current Financial ROI');
        referralName = cookies.get('Referral Code (Name)');
        referralNo = cookies.get('Referral Code(Mobile No.)');
        usernName = cookies.get('User (Name)');
        userNo = cookies.get('User (Mobile No.)');
        userMail = cookies.get('User (Email)');
        async function executeStudentCrudOperations() {
            // const uri = process.env.DB_URI;
            let mongoClient;

            try {
                mongoClient = await connectToCluster();
                const db = mongoClient.db('form');
                const collection = db.collection('formData');
                console.log('CREATE User');
                await createStudentDocument(collection);
            } finally {
                await mongoClient.close();
            }
        }
        async function createStudentDocument(collection) {
            const studentDocument = {
                home,
                propertyPurchase,
                propertyLocationState,
                propertyLocationCity,
                workingLocationState,
                workingLocationCity,
                masterPlan,
                propertyType,
                propertiesOwned,
                referralName,
                referralNo,
                usernName,
                userNo,
                userMail,
                currentFinancialName,
                roi,
                currentFinanciallocation



            };

            await collection.insertOne(studentDocument);
        }


        config();
        await executeStudentCrudOperations();
        return {
          success: true
        };
    }
    
}

// export const actions = {
//     default: async ({ request }) => {
//         const formData = await request.formData();
//         async function executeStudentCrudOperations() {
//             const uri = process.env.DB_URI;
//             let mongoClient;

//             try {
//                 mongoClient = await connectToCluster(uri);
//                 const db = mongoClient.db('form');
//                 const collection = db.collection('formData');
//                 console.log('CREATE User');
//                 await createStudentDocument(collection);
//             } finally {
//                 await mongoClient.close();
//             }
//         }
//         async function createStudentDocument(collection) {
//             const studentDocument = {
//                 home,
//                 propertyPurchase,
//                 propertyLocationState,
//                 propertyLocationCity,
//                 workingLocationState,
//                 workingLocationCity,
//                 masterPlan,
//                 propertyType,
//                 propertiesOwned,
//                 referralName,
//                 referralNo,
//                 usernName,
//                 userNo,
//                 userMail,
//                 currentFinancialName,
//                 roi,
//                 currentFinanciallocation



//             };

//             await collection.insertOne(studentDocument);
//         }


//         config();
//         await executeStudentCrudOperations();
//     }
// }

// export const actions = {
//   default: async ({ request }) => {
//     const formData = Object.fromEntries(await request.formData());
 
    // if (
    //   !(formData.fileToUpload as File).name ||
    //   (formData.fileToUpload as File).name === 'undefined'
    // ) {
    //   return fail(400, {
    //     error: true,
    //     message: 'You must provide a file to upload'
    //   });
    // }
 
    // const { fileToUpload } = formData as { fileToUpload: File };
    // writeFileSync(`static/userfiles/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));
    
    // return {
    //   success: true
    // };
//   }
// };