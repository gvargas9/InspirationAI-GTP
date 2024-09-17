export default {
	// Function to show the LoginModal widget
	showLogin: () => {
		// Retrieve the value from appsmith store
		var a = appsmith.store.user.logged; 

		// Check if 'a' is true
		if (a === false) {
			// Use Appsmith's widget property setters to open the modal
			return navigateTo('Login', {}, 'SAME_WINDOW');
		}
	}
};
