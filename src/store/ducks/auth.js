import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signUpRequest: ['name', 'email', 'password'],
  signInSuccess: ['token'],
  signOut: null,
  getPermissionsSuccess: ['roles', 'permissions'],
});

export const AuthTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  signedIn: false,
  token: null,
  roles: [],
  permissions: [],
});

// Reducers

export const success = (state, { token }) => state.merge({ signedIn: true, token });

export const logout = state => state.merge({ signedIn: false, token: null });

export const permissionsSuccess = (state, { roles, permissions }) => state.merge({ roles, permissions })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  [Types.GET_PERMISSIONS_SUCCESS]: permissionsSuccess,
});
