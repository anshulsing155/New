import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
import { writeFile } from 'fs/promises';
import fs from 'fs/promises';
import { promises } from 'dns';

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

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = Object.fromEntries(await request.formData());

        let selectedFile = formData.file;

        if (selectedFile) {
            // Create a new Date object to get the current date and time
            const currentDate = new Date();

            // Get the current day, month, year, hour, minute, and second
            const currentDay = currentDate.getDate(); // Day (1-31)
            const currentMonth = currentDate.getMonth() + 1; // Month (0-11, so add 1 for human-readable month)
            const currentYear = currentDate.getFullYear(); // Year (4 digits)
            const currentHour = currentDate.getHours(); // Hour (0-23)
            const currentMinute = currentDate.getMinutes(); // Minute (0-59)
            const currentSecond = currentDate.getSeconds(); // Second (0-59)
            const fileDate = '' + currentDay + currentMonth + currentYear + currentHour + currentMinute + currentSecond;
            const newName = fileDate + '_' + selectedFile.name;
            selectedFile = new File([selectedFile.name], newName);
            await fs.writeFile(`static/userfiles/${selectedFile.name}`, await selectedFile.text());
            // await writeFile(`static/userfiles/${selectedFile.name}`, new Uint8Array(await selectedFile.arrayBuffer()));
            // writeFile(`static/userfiles/${selectedFile.name}`, Buffer.from(await selectedFile.arrayBuffer()));
        }
        let fileUrl = "userfiles/" + selectedFile.name;

        const home = cookies.get('Requirment');
        const propertyPurchase = cookies.get('Stage of Property purchase');
        const propertyLocationState = cookies.get('Property Location (State)');
        const propertyLocationCity = cookies.get('Property Location (City)');
        const workingLocationState = cookies.get('Working Location (State)');
        const workingLocationCity = cookies.get('Working Location (City)');
        const currentFinancialName = cookies.get('Current Financial Name');
        const currentFinanciallocation = cookies.get('Current Financial Location');
        const masterPlan = cookies.get("Is it part of Master plan of City");
        const propertyType = cookies.get("Type of Property");
        const propertiesOwned = cookies.get("No. of properties already owned")
        const roi = cookies.get('Current Financial ROI');
        const referralName = cookies.get('Referral Code (Name)');
        const referralNo = cookies.get('Referral Code(Mobile No.)');
        const usernName = cookies.get('User (Name)');
        const userNo = cookies.get('User (Mobile No.)');
        const userMail = cookies.get('User (Email)');
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
                currentFinanciallocation,
                fileUrl,


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
