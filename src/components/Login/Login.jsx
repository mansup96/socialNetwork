import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const LoginFormik = props => {
	const validate = values => {
		const errors = {};
		if (!values.email) {
			errors.email = 'Required!';
		} else if (values.email.length < 6) {
			errors.email = 'Must be 6 characters or more';
		}
		return errors;
	};

	return (
		<Formik
			initialValues={{ email: '', password: '', rememberMe: false }}
			onSubmit={(values, { setSubmitting }) => {
				props.onSubmit(values).then(resp => {
					console.log(resp);
					if (resp.resultCode === 0) {
						setSubmitting(false);
					}
				});
			}}
			validate={validate}
		>
			<Form>
				<div>
					<Field name="email" type="text" placeholder="Email" />
					<ErrorMessage name="email" />
				</div>
				<div>
					<Field
						name="password"
						type="password"
						placeholder="Password"
					/>
				</div>
				<div>
					<Field name="rememberMe" type="checkbox" />
					Remember me?
				</div>
				<ErrorMessage name="common" />
				<div>
					<button type="submit">Login</button>
				</div>
			</Form>
		</Formik>
	);
};

export const Login = props => {
	const onSubmit = e => {
	console.log(props.login(e));
		return props.login(e);
	};
	if (props.credentials) {
		return <Redirect to="/profile" />;
	}
	return (
		<div>
			<h1>login</h1>
			<LoginFormik onSubmit={onSubmit} />
		</div>
	);
};

const mapStateToProps = state => ({
	credentials: state.auth.credentials,
	errors: state.auth.error,
});

export default connect(mapStateToProps, { login })(Login);
