import { authAPI } from '../api/api';

const SET_CLIENT_DATA = 'SET_CLIENT_DATA',
	CLEAR_CLIENT_DATA = 'CLEAR_CLIENT_DATA',
	SET_ERROR = 'SET_ERROR';

let initialState = {
	credentials: null,
	isFetching: false,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CLIENT_DATA:
			return {
				...state,
				credentials: { ...action.data },
			};
		case CLEAR_CLIENT_DATA:
			return {
				...state,
				credentials: null,
			};
		case SET_ERROR:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};

const setAuthClientData = (userID, email, login) => ({
	type: SET_CLIENT_DATA,
	data: { userID, email, login },
});

const clearAuthClientData = () => ({
	type: CLEAR_CLIENT_DATA,
});

const setApiError = error => ({
	type: SET_ERROR,
	error,
});

export const setMe = () => dispatch => {
	authAPI.me().then(data => {
		if (data.resultCode === 0) {
			let { id, login, email } = data.data;
			dispatch(setAuthClientData(id, email, login));
		}
	});
};

export const login = formData => dispatch => {
	authAPI.login(formData).then(data => {
		if (data.resultCode === 0) {
			dispatch(setMe());
		} else if (data.resultCode === 10) {
			authAPI.getCaptcha().then(resp => console.log(resp));
		} else {
			const error = {};
			if (data.fieldsErrors.length > 0) {
				data.fieldsErrors.forEach(err => {
					error[err.field] = err.error;
				});
			} else {
				error.common = data.messages[0];
			}
			dispatch(setApiError(error));
		}
	});
};

export const logout = () => dispatch => {
	authAPI.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(clearAuthClientData());
		}
	});
};

export default authReducer;
