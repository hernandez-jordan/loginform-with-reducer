import { StateLogin } from "./index";
import { UserAction, UserActionType } from "../store/actions.d";

export function loginReducer(state: StateLogin, action: UserAction) {
  switch (action.type) {
    case UserActionType.LOGIN:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case UserActionType.LOGOUT:
      return {
        ...state,
        isLoading: false,
        error: "",
        username: "",
        password: "",
        userHasAuthenticated: false,
      };
    case UserActionType.SUCCESS:
      return {
        ...state,
        userHasAuthenticated: true,
        isLoading: false,
        error: "",
      };
    case UserActionType.ERROR:
      return {
        ...state,
        isLoading: false,
        error: "incorrect username or password",
      };
    case UserActionType.FIELD:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      break;
  }
  return state;
}
