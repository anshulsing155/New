import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
import  {writeFileSync}  from 'node:fs';
import transporter from "$lib/emailSetup.server.js";
let GOOGLE_EMAIL = "billing@hostingfighter.com"
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

let Requirments, propertyPurchase, propertyLocationState, propertyLocationCity, workingLocationState, workingLocationCity, masterPlan, propertyType, propertiesOwned, referralName, referralNo, usernName, userNo, userMail, currentFinancialName, roi, currentFinanciallocation;


export const actions = {
    default: async ({request,cookies }) => {
    const formData = Object.fromEntries(await request.formData());
    
    let selectedFile = formData.file ;
    
    
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
        const fileDate = ''+ currentDay+currentMonth+currentYear+currentHour+currentMinute+currentSecond;
        
        
  
        const newName = fileDate + '_' + selectedFile.name;
        selectedFile = new File([selectedFile], newName);
        
      }
    
    let fileUrl = "/userfiles/"+selectedFile.name;
    writeFileSync(`static/userfiles/${selectedFile.name}`, Buffer.from(await selectedFile.arrayBuffer()));
        Requirments = cookies.get('Requirment');
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
        console.log(typeof(userMail));
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
                Requirments,
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

            // await collection.insertOne(studentDocument);
            let email = "anshulsing154@gmail.com"
            let subject = "New User Login"
            let body = studentDocument.currentFinancialName;
            let html = `<!DOCTYPE html>
            <html>
            <head>
            <style>
            table {
              font-family: arial, sans-serif;
              border-collapse: collapse;
              width: 100%;
            }
            
            td, th {
              border: 1px solid #dddddd;
              text-align: left;
              padding: 8px;
            }
            
            tr:nth-child(even) {
              background-color: #dddddd;
            }
            </style>
            </head>  
            <body>
            Dear Sir,
 Please review this email in its entirety as it contains important information.

New User Logging In
<h2>New User Detailes</h2>

<table>
  <tr>
    <th>Requrements</th>
    <th>User input Data</th>
  </tr>
  <tr>
    <td>Name</td>
    <td>${studentDocument.usernName}</td>
  </tr>
  <tr>
    <td>Mobile No.</td>
    <td>${studentDocument.userNo}</td>
   
  </tr>
  <tr>
    <td>Email</td>
    <td>${studentDocument.userMail}</td>
  </tr>
  <tr>
    <td>Requirment</td>
    <td>${studentDocument.Requirments}</td>
   
  </tr>
  <tr>
    <td>Property Location (City)</td>
    <td>${studentDocument.propertyLocationCity}</td>
  </tr>
  <tr>
    <td>Working Location (City)</td>
    <td>${studentDocument.propertyLocationState}</td>
  </tr>
</table>



</body>
            `;
            console.log(email);
            const message = {
                from: GOOGLE_EMAIL,
                to: email,
                subject: subject,
                text: body,
                html: html,
            };
            
            const sendEmail = async (message) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail(message);

            return {
                success: "Email is sent",
            };
        }


        config();
        await executeStudentCrudOperations();
        return {
          success: true
        };
    }
    
}
