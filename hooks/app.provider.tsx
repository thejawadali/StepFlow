import {
  createContext,
  Provider,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AppContext = createContext<any>(null);

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userName: string;
  password: string;
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
};

const reducer = (
  state: IUser,
  action: { type: ActionTypes; payload: string }
) => {
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
  const [formData, setFormData] = useReducer(reducer, initialState);
  const [isError, setIsError] = useState<boolean>(false);
  const [wiggleAnimation, setWiggleAnimation] = useState(false);

  const submitForm = () => {
    if (formData.userName && formData.password) {
      setIsError(false);
      alert("form submitted :)");
      console.log(formData);
    } else {
      setIsError(true);
    }
  };

  function increaseStep() {
    switch (stepNo) {
      case 1:
        // check if firstName and last name are not empty
        if (formData.firstName && formData.lastName) {
          setStepNo(stepNo + 1);
          setIsError(false);
        } else {
          setIsError(true);
          setWiggleAnimation(true)
        }
        break;
      case 2:
        // check if email and phoneNumer are not empty
        if (formData.email && formData.phoneNumber) {
          setStepNo(stepNo + 1);
          setIsError(false);
        } else {
          setIsError(true);
          setWiggleAnimation(true)
        }
        break;
      default:
        break;
    }
  }

  return (
    <AppContext.Provider
      value={{
        stepNo,
        setStepNo,
        increaseStep,
        submitForm,
        setWiggleAnimation,
        wiggleAnimation,
        formData,
        isError,
        setFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  return useContext(AppContext);
};
