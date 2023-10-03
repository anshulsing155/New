export function load({ cookies }) {
	const allCookies = cookies.getAll();
	const visited = cookies.get('visited');
	// const Requirment = cookies.get('Requirment');
	// const purchase = cookies.get('Stage of Property purchase');
	// const propertyPurchase = cookies.get('Stage of Property purchase');
	// const propertyLocationState = cookies.get('Property Location (State)');
	// const propertyLocationCity = cookies.get('Property Location (City)');
	// const workingLocationState = cookies.get('Working Location (State)');
	// const workingLocationCity = cookies.get('Working Location (City)');
	// const currentFinancialName = cookies.get('Current Financial Name');
	// const masterPlan = cookies.get("Is it part of Master plan of City");
	// const propertyType = cookies.get("Type of Property");
	// const propertiesOwned = cookies.get("No. of properties already owned")
	// const roi = cookies.get('Current Financial ROI');
	// const referralName = cookies.get('Referral Code (Name)');
	// const referralNo = cookies.get('Referral Code(Mobile No.)');
	// const usernName = cookies.get('User (Name)');
	// const userNo = cookies.get('User (Mobile No.)');
	// const userMail = cookies.get('User (Email)');
	return {
		visited,
		// Requirment,
		allCookies
	};
}