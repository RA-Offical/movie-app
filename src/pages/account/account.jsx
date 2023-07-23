import sideImg from "../../assets/side.png";
import "./account.css";

const Account = () => {
	return (
		<div className="flex  gen-auth">
			<section className="md-padx-1x pady-header-height max-fw mg-center grid align-cc justify-cc justify-ic auth-content">
				<h2 className="auth__title">Account</h2>
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
						<label htmlFor="username" className="auth-input__label">
							Username
						</label>

						<input
							type="text"
							id="username"
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
						<label htmlFor="email" className="auth-input__label">
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
						<label htmlFor="password" className="auth-input__label">
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

					<div className="flex align-ic justify-btw auth-action">
						<button className="btn btn--primary btn--block">
							Update
						</button>
					</div>
				</form>
			</section>
			<div className="auth-side">
				<img src={sideImg} alt="" />
			</div>
		</div>
	);
};

export default Account;
