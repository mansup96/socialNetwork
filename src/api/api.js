import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "9580912d-a5e1-40ec-b7c6-7a2005df9219",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize = 15) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(result => result.data)
      .catch(err => console.log(err));
  },

  follow(userID) {
    return instance
      .post(`follow/${userID}`)
      .then(result => result.data)
      .catch(err => console.log(err));
  },
  unfollow(userID) {
		return instance
		.delete(`follow/${userID}`)
		.then(result => result.data)
		.catch(err => console.log(err));
	},
};
