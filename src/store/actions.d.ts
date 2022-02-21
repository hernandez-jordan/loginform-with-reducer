export enum FieldNameType {
  USERNAME = "username",
  PASSWORD = "password",
}

export enum UserActionType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  FIELD = "FIELD",
}

export type UserAction =
  | {
      type:
        | UserActionType.LOGIN
        | UserActionType.LOGOUT
        | UserActionType.ERROR
        | UserActionType.SUCCESS;
    }
  | {
      type: UserActionType.FIELD;
      field: string;
      value: string;
    };

export type UserProviderProps = {
  children?: React.ReactNode;
};
