const validateForm = (
	form,
	{ inputField, inputLabel, inputError, inputGroup }
) => {
	const inputGroups = form.querySelectorAll(`.${inputGroup}`);

	const validationOptions = [
		{
			attribute: "required",
			isValid: (input) => input.value.trim() !== "",
			errorMessage: (input, label) => `${label.textContent} is required`,
		},
	];

	const validateInputGroups = (inputGroups) => {
		inputGroups.forEach((inputGroup) => {
			validateSingleInputGroup(inputGroup);
		});
	};

	const validateSingleInputGroup = (inputGroup) => {
		const inputElem = inputGroup.querySelector(`.${inputField}`);
		const labelElem = inputGroup.querySelector(`.${inputLabel}`);
		const errorElem = inputGroup.querySelector(`.${inputError}`);

		let formGroupError = false;

		for (const option of validationOptions) {
			if (
				inputElem.hasAttribute(option.attribute) &&
				!option.isValid(inputElem)
			) {
				errorElem.textContent = option.errorMessage(
					inputElem,
					labelElem
				);
				errorElem.classList.add("show");
				formGroupError = true;
			}
		}

		if (!formGroupError) {
			errorElem.classList.remove("show");
		}
	};

	validateInputGroups(inputGroups);
};

export { validateForm };
