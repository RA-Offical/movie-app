const loginMetaData = [
	{
		id: "username",
		label: "Username",
		name: "username",
		type: "text",
		validationRules: {
			required: { value: true, message: `Username is required` },
		},
	},
	{
		id: "password",
		label: "Password",
		type: "password",
		name: "password",
		validationRules: {
			required: {
				value: true,
				message: "Password is required",
			},
		},
	},
];

export default loginMetaData;
