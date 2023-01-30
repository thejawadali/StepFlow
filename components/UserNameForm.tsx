import React from "react";
import InputField from "./InputField";

const fields = [
  {
    id: "firsName",
    label: "First name",
    value: "jawad",
    onChange() {
      console.log(this.value);
    },
  },
  {
    id: "lastName",
    label: "Last name",
    value: "Ali",
    onChange() {
      console.log(this.value);
    },
  },
];
function UserNameForm() {
  return (
    <fieldset className="w-full px-12">
      {fields.map((field: any) => {
        return (
          <InputField
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

export default UserNameForm;
