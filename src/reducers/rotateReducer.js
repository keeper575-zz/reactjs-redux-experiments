export default (state, action) => {
	switch (action.type) {
		case "rotate":
			console.log("not default");
			return {
				rotating: action.payload
			};
		default:
			console.log("default");
			return state;
	}
};
