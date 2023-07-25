import { Link } from "react-router-dom";
import "./signup.css";
import sideImg from "../../assets/side.png";

const Signup = () => {
	return (
		<main>
			<div className="flex gen-auth">
				<section className="md-padx-1x pady-app-top max-fw mg-center grid align-cc justify-cc justify-ic auth-content">
					<h2 className="auth__title">Signup</h2>
					<form className="flex flex-col padx-01x pady-01x auth-form">
						<div className="flex flex-col auth-input-group">
							<label htmlFor="name" className="auth-input__label">
								Name
							</label>
							<input
								type="text"
								id="name"
								className="auth-input__field"
								autoFocus
							/>
							<div className="auth-input__error">
								<p className="auth-input__error__text">
									Input field is empty
								</p>
							</div>
						</div>
						<div className="flex flex-col auth-input-group">
							<label
								htmlFor="username"
								className="auth-input__label"
							>
								Username
							</label>
							<input
								type="text"
								id="username"
								className="auth-input__field"
							/>
							<div className="auth-input__error">
								<p className="auth-input__error__text">
									Input field is empty
								</p>
							</div>
						</div>
						<div className="flex flex-col auth-input-group">
							<label
								htmlFor="email"
								className="auth-input__label"
							>
								Email
							</label>
							<input
								type="text"
								id="email"
								className="auth-input__field"
							/>
							<div className="auth-input__error">
								<p className="auth-input__error__text">
									Input field is empty
								</p>
							</div>
						</div>
						<div className="flex flex-col auth-input-group">
							<label
								htmlFor="password"
								className="auth-input__label"
							>
								Password
							</label>
							<input
								type="text"
								id="password"
								className="auth-input__field"
							/>
							<div className="auth-input__error">
								<p className="auth-input__error__text">
									Input field is empty
								</p>
							</div>
						</div>
						<div className="flex flex-col auth-input-group">
							<label
								htmlFor="password"
								className="auth-input__label"
							>
								Confirm Password
							</label>
							<input
								type="text"
								id="password"
								className="auth-input__field"
							/>
							<div className="auth-input__error">
								<p className="auth-input__error__text">
									Input field is empty
								</p>
							</div>
						</div>
						<div className="flex align-ic justify-btw  auth-action">
							<div className="auth-action__invert">
								Don't have an account!{" "}
								<Link
									to="/login"
									className="btn btn--primary-no-outline"
								>
									Login
								</Link>
							</div>
							<button className="btn btn--primary">Signup</button>
						</div>
					</form>
				</section>
				<div className="auth-side">
					<img src={sideImg} alt="" />
				</div>
			</div>
		</main>
	);
};

export default Signup;
