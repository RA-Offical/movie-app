import { Link } from "react-router-dom";
import "./signup.css";
import sideImg from "../../assets/side.png";
import { FormGroup } from "../../components";
import signupMetaData from "../../data/signupData";
import { useForm } from "react-hook-form";

const Signup = () => {
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitSignup = () => {
		console.log(getValues());
	};

	return (
		<main>
			<div className="flex gen-auth">
				<section className="md-padx-1x pady-app-top max-fw mg-center grid align-cc justify-cc justify-ic auth-content">
					<h2 className="auth__title">Signup</h2>
					<form
						noValidate
						className="flex flex-col padx-01x pady-01x auth-form"
						onSubmit={handleSubmit(submitSignup)}
					>
						{signupMetaData.map((data) => {
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
									to="/login"
									className="btn btn--primary-no-outline"
								>
									Login
								</Link>
							</div>

							<button type="submit" className="btn btn--primary">
								Signup
							</button>
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
