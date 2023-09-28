import { db } from "$lib/database/mongo";
import ExcelJS from 'exceljs';
import { readdir } from "node:fs";

// const dir = opendirSync(`./static/export/`);
// for (const entry of dir) {
//     console.log("Found file:", entry.name);
// }
export function load(){
	readdir('./static/export/', function (err, files) {
		//handling error
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		} 
		//listing all files using forEach
		files.forEach(function (file) {
			// Do whatever you want to do with the file
			console.log(file.name);
	// 		let files = JSON.stringify(file);
	// return {
	//  files
	// }
			
		});
	});
}

export const actions = {
	default: async ({ request }) => {
		const data = await db.collection('formData').find().toArray();
		const workbook = new ExcelJS.Workbook();
		const worksheet = workbook.addWorksheet('Collection Data');
		const columns = [
			{ header: '_id', key: '_id', width: 32 },
			{ header: 'Requirement', key: 'Requirement', width: 32 },
			{ header: 'User Name', key: 'Name', width: 32 },
			{ header: 'User Mobile No.', key: 'User Mobile No.', width: 32 },
			{ header: 'User Email', key: 'User Email' },
			{ header: 'Property Purchase', key: 'Property Purchase', width: 32 },
			{ header: 'Property Location State', key: 'Property Location State', width: 32 },
			{ header: 'Property Location City', key: 'Property Location City', width: 32 },
			{ header: 'Working Location State', key: 'Working Location State', width: 32 },
			{ header: 'Working Location City', key: 'Working Location City', width: 32 },
			{ header: 'Master Plan', key: 'Master Plan', width: 32 },
			{ header: 'Property Type', key: 'Property Type', width: 32 },
			{ header: 'Properties Owned', key: 'Properties Owned', width: 32 },
			{ header: 'Referral Name', key: 'Referral Name', width: 32 },
			{ header: 'Referral No', key: 'Referral No', width: 32 },
			{ header: 'Current Financial Name', key: 'Current Financial Name', width: 32 },
			{ header: 'ROI', key: 'ROI' },
		];
		worksheet.columns = columns;
		for (let index = 0; index < data.length; index++) {
			const element = data[index];
			
        // workbook.xlsx.readFile((`{fileUrl}`))
        //     .then(function() {
        //       var imageID = workbook.addImage({
        //         filename: imagePath,
        //         extension: 'png',
        //       });
        //       console.log("imageID", element.fileUrl);
        //       const relCol = cell.columnNumber() - 1;
        //       const relNum = cell.rowNumber() - 1;
              
        //       worksheet.addImage(imageID, {
        //         tl: { col: relCol, row: relNum },
        //         ext: { width: 100, height: 50 } // currently I'm using fixed width and height.
        //       });
        //       workBook.xlsx.writeFile(outputPath);
        //     });


			worksheet.addRow({
				_id: element._id,
				Requirement: element.home,
				Name: element.usernName,
				'User Mobile No.': element.userNo,
				'User Email': element.userMail,
				'Property Purchase': element.propertyPurchase,
				'Property Location State': element.propertyLocationState,
				'Property Location City': element.propertyLocationCity,
				'Working Location State':element.workingLocationState,
				'Working Location City':element.workingLocationCity,
				'Master Plan':element.masterPlan,
				'Property Type':element.propertyType,
				'Properties Owned':element.propertiesOwned,
				'Referral Name':element.referralName,
				'Referral No':element.referralNo,
				'Current Financial Name':element.currentFinancialName,
				'ROI':element.roi,
			});
			
			  
		}
		const filename = `export_${Date.now()}.xlsx`;
		await workbook.xlsx.writeFile(`static/export/${filename}`);
		console.log(`Data exported to ${filename}`);
	}

}
