import React, { useContext } from "react";
import { login } from "../utilities/login";
import {
  StateContext,
  DispatchContext,
  StateLogin,
  UserDispatch,
} from "../store/index";
import { UserActionType } from "../store/actions.d";
import Dashboard from "./Dashboard";

export default function LoginForm() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext) as UserDispatch;

  const { error, username, password, isLoading, userHasAuthenticated } =
    state as StateLogin;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({ type: UserActionType.LOGIN });
    try {
      await login({ username, password });
      dispatch({ type: UserActionType.SUCCESS });
    } catch (err) {
      console.log(err);
      dispatch({ type: UserActionType.ERROR });
    }
  }

  return (
    <div className="app">
      {userHasAuthenticated ? (
        <Dashboard />
      ) : (
        <div className="container">
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please login</p>
            <input
              type="text"
              placeholder="username"
              autoComplete="on"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: UserActionType.FIELD,
                  field: "username",
                  value: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="on"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: UserActionType.FIELD,
                  field: "password",
                  value: e.target.value,
                })
              }
            />
            <button type="submit" className="submit" disabled={isLoading}>
              {isLoading ? "logging in.." : "Log in"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
