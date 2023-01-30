import React from "react";
import InputField from "./InputField";

const fields = [
  {
    id: "email",
    label: "Email",
    value: "",
    onChange() {
      
    },
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    value: "",
    onChange() {
      
    },
  },
];
function ContactForm() {
  return (
    <fieldset className="w-full px-12">
      {fields.map((field: any) => {
        return (
          <InputField
            placeholder={field.label}
            key={field.id}
            value={field.name}
            onChange={field.onChange}
            label={field.label}
            id={field.id}
          />
        );
      })}
    </fieldset>
  );
}

export default ContactForm;
