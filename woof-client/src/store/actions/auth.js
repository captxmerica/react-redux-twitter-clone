import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function authUser(type, userData) {
  return dispatch => {
    // wrap our thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve(); // indicate that the API call succeeded
        })
        .catch(err => {
          dispatch(addError(err.message));
          reject(); // indicate the API call failed
        });
    });
  };
}
export const userUpdate = post => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("put", `api/auth/update/${id}`, {
    firstName: post.firstName,
    lastName: post.lastName,
    bio: post.bio,
    profileImageUrl: post.profileImageUrl
  }).then(user => dispatch(setCurrentUser({ currentUser: user })));

  // indicate that the API call succeeded)
};
