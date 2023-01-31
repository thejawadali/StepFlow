import React from "react";
import { ActionTypes, useAppStore } from "../hooks/app.provider"
import InputField from "./InputField";

function ContactForm() {
  const { formData, setFormData } = useAppStore();
  return (
    <fieldset className="w-full px-12">
      <InputField
        placeholder="Enter Email..."
        value={formData.email}
        onChange={(e) => setFormData({ type: ActionTypes.CHANGE_EMAIL, payload: e.target.value })}
        label="Email"
        id="email"
      />
      <InputField
        placeholder="Enter Phone Number..."
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ type: ActionTypes.CHANGE_PHONE_NUMBER, payload: e.target.value })}
        label="Phone number"
        id="phone-number"
      />
    </fieldset>
  );
}

export default ContactForm;
