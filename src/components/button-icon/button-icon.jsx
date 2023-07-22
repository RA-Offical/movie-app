import "./button-icon.css";

const ButtonIcon = ({ generalClasses, icon }) => {
	return (
		<button
			className={`flex align-ic justify-cc ${generalClasses} btn btn--icon-only btn--icon-only-sm`}
		>
			{icon}
		</button>
	);
};

export default ButtonIcon;
