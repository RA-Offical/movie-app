import "./alert.css";

const Alert = ({ generalClasses }) => {
	return (
		<div className={`${generalClasses} alert alert--success`} role="alert">
			<p className="alert__msg">Movie added to watchlist successfully</p>
		</div>
	);
};

export default Alert;
