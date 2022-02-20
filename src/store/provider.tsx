import { createContext, Dispatch, useReducer } from "react";
import { UserProviderProps, loginReducer } from "./index";
import { UserAction } from "../store/actions.d";

const initialState: StateLogin = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  userHasAuthenticated: false,
  variant: "login",
};

export interface StateLogin {
  username: string;
  password: string;
  isLoading: boolean;
  error: string;
  userHasAuthenticated: boolean;
  variant: "login" | "forgot password";
}

export type UserState = StateLogin | null;
export type UserDispatch = Dispatch<UserAction>;

export const StateContext = createContext<UserState | undefined>(undefined);
export const DispatchContext = createContext<UserDispatch | undefined>(
  undefined
);

export const UserProvider = (props: UserProviderProps) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
