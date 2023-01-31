import { createContext, Provider, useContext, useEffect, useReducer, useState } from "react";

const AppContext = createContext<any>(null);

export interface IUser {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  userName: string
  password: string
}

export enum ActionTypes {
  CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME",
  CHANGE_LAST_NAME = "CHANGE_LAST_NAME",
  CHANGE_EMAIL = "CHANGE_EMAIL",
  CHANGE_PHONE_NUMBER = "CHANGE_PHONE_NUMBER",
  CHANGE_USERNAME = "CHANGE_USERNAME",
  CHANGE_PASSWORD = "CHANGE_PASSWORD",
}

const initialState: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  userName: "",
  password: "",
}

const reducer = (state:IUser, action: { type: ActionTypes; payload: string }) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ActionTypes.CHANGE_LAST_NAME:
      return { ...state, lastName: action.payload };
    case ActionTypes.CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case ActionTypes.CHANGE_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case ActionTypes.CHANGE_USERNAME:
      return { ...state, userName: action.payload };
    case ActionTypes.CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: any) => {
  const [stepNo, setStepNo] = useState<number>(1);
  const [formData, setFormData] = useReducer<any>(reducer, initialState);



  return (
    <AppContext.Provider
      value={{ stepNo, setStepNo, formData, setFormData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  return useContext(AppContext);
};
