import React from "react";
import InputField from "./InputField";

const fields = [
  {
    id: "userName",
    label: "User Name",
    value: "",
    type: "text",
    onChange() {
      
    },
  },
  {
    id: "pasword",
    label: "Password",
    value: "",
    type: "password",
    onChange() {
      
    },
  },
];
function LoginForm() {
  return (
    <fieldset className="w-full px-12">
      {fields.map((field: any) => {
        return (
          <InputField
            placeholder={field.label}
            key={field.id}
            value={field.name}
            type={field.type}
            onChange={field.onChange}
            label={field.label}
            id={field.id}
          />
        );
      })}
    </fieldset>
  );
}

export default LoginForm;
