import React from "react";

interface Props {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  class?: string;
  touched?: boolean;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

function InputField(props: Props) {
  return (
    <div className="w-full grid grid-cols-2 items-center my-3">
      <label htmlFor={props.id} className="ml-5 text-sm text-gray-700">
        {props.label}:
      </label>
      <input
        onBlur={props.handleBlur}
        id={props.id}
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={`border text-gray-600 px-2 py-1 rounded outline-none w-full ${
          props.class
        } ${
          props.error && props.touched
            ? "border-red-500"
            : "focus:border-gray-500"
        }`}
      />
    </div>
  );
}

export default InputField;
