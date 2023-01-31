import React from "react";

interface Props {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  class?: string;
  error?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField(props: Props) {
  return (
    <div className="w-full grid grid-cols-2 items-center my-3">
      <label htmlFor={props.id} className="text-sm text-gray-700">
        {props.label}:
      </label>
      <input
        id={props.id}
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={`border text-gray-600 px-2 py-1 rounded outline-none w-full text-sm ${
          props.class
        } ${
          props.error
            ? "border-red-500 bg-red-50"
            : "focus:border-gray-500"
        }`}
      />
    </div>
  );
}

export default InputField;
