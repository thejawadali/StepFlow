import React from "react";
import { ActionTypes, useAppStore } from "../hooks/app.provider"
import InputField from "./InputField";

const fields = [
  {
    id: "userName",
    label: "User Name",
    value: "",
    type: "text",
    onChange() {},
  },
  {
    id: "pasword",
    label: "Password",
    value: "",
    type: "password",
    onChange() {},
  },
];
function LoginForm() {
  const { formData, setFormData } = useAppStore();
  return (
    <fieldset className="w-full px-20">
      <InputField
        placeholder="Enter username..."
        value={formData.username}
        onChange={(e) => setFormData({ type: ActionTypes.CHANGE_USERNAME, payload: e.target.value })}
        label="User name"
        id="username"
      />
      <InputField
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ type: ActionTypes.CHANGE_PASSWORD, payload: e.target.value })}
        label="Password"
        id="password"
      />
    </fieldset>
  );
}

export default LoginForm;
