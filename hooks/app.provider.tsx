import { createContext, Provider, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(null);

export interface IType {
  label: string;
  value: string | number;
}

export const AppProvider = ({ children }: any) => {
  const [stepNo, setStepNo] = useState<number>(1);
  const [formData, setFormData] = useState<IType[]>([
    {
      label: "First Name",
      value: "",
    },
    {
      label: "Last Name",
      value: "",
    },
    {
      label: "Email",
      value: "",
    },
    {
      label: "Phone Number",
      value: "",
    },
    {
      label: "UserName",
      value: "",
    },
    {
      label: "Password",
      value: "",
    },
  ]);


  const increaseStep = () => {
    setStepNo(stepNo - 1)
  }

  

  const updateField = (value: string | number, label: string) => {
    const index = formData.findIndex((f: IType) => f.label === label);
    console.log(index);
    formData[index].value = value;
    setFormData(formData);
  };

  return (
    <AppContext.Provider
      value={{ stepNo, setStepNo, formData, updateField }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  return useContext(AppContext);
};
