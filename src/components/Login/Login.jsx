import React from 'react';
import { withFormik, Form, Field } from 'formik';

export const LoginForm = props => {
	// debugger
	const {
		values,
		touched,
		errors,
		dirty,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset,
	} = props;
	return (
		<Form>
			<div>
				<Field
					component="input"
					name="Email"
					type="text"
					placeholder="Email"
				/>
			</div>
			<div>
				<Field
					component="input"
					name="Password"
					type="password"
					placeholder="Password"
				/>
			</div>
			<div>
				<Field component="input" name="rememberMe" type="checkbox" />
				Remember me?
			</div>
			<div>
				<button type="submit" disabled={isSubmitting}>
					Login
				</button>
			</div>
		</Form>
	);
};

const LoginFormik = withFormik({
	handleSubmit: (e, a) => {
		console.log(a);
		// props.onSubmit(values)
		// setSubmitting(false);
	},
})(LoginForm);

export const Login = props => {
	function onSubmit(e) {
		console.log(e);
	}
	return (
		<div>
			<h1>login</h1>
			<LoginFormik onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
