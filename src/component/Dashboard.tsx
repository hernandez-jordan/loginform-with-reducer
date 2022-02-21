import { useContext } from "react";
import {
  DispatchContext,
  StateContext,
  StateLogin,
  UserActionType,
  UserDispatch,
} from "../store";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext) as UserDispatch;
  const { username, userHasAuthenticated } = state as StateLogin;
  let navigate = useNavigate();

  return (
    <>
      {userHasAuthenticated ? (
        <div className="container">
          <h1>Welcome {username}</h1>
          <button
            className="submit"
            type="submit"
            onClick={() => dispatch({ type: UserActionType.LOGOUT })}
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="app">
          <div className="container">
            <h1>Error, You are not logged in</h1>
            <button
              className="submit"
              type="submit"
              onClick={() => navigate(`/`)}
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
