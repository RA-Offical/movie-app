import { Link } from "react-router-dom";
import sideImg from "../../assets/side.png";
import { FormGroup } from "../../components";
import loginMetaData from "../../data/loginData";
import { useForm } from "react-hook-form";
import "./login.css";

const Login = () => {
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitLogin = () => {
		console.log(getValues());
	};
	return (
		<main>
			<div className="flex gen-auth">
				<section className="md-padx-1x pady-header-height max-fw mg-center grid align-cc justify-cc justify-ic auth-content">
					<h2 className="auth__title">Login</h2>
					<form
						className="flex flex-col padx-01x pady-01x auth-form"
						onSubmit={handleSubmit(submitLogin)}
					>
						{loginMetaData.map((data) => {
							return (
								<FormGroup
									key={data.id}
									{...data}
									getValues={getValues}
									register={register}
									error={errors[data.name]}
								/>
							);
						})}

						<div className="flex align-ic justify-btw  auth-action">
							<div className="auth-action__invert">
								Don't have an account!{" "}
								<Link
									to="/signup"
									className="btn btn--primary-no-outline"
								>
									Signup
								</Link>
							</div>
							<button className="btn btn--primary">Login</button>
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

export default Login;
