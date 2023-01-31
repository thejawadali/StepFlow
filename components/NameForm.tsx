import { ActionTypes, useAppStore } from "../hooks/app.provider";
import InputField from "./InputField";

function UserNameForm() {
  const { formData, setFormData, isError } = useAppStore();

  return (
    <fieldset className="w-full px-2 md:px-12">
      <InputField
        placeholder="Enter First Name..."
        value={formData.firstName}
        error={(isError && !formData.firstName)}
        onChange={(e) => setFormData({ type: ActionTypes.CHANGE_FIRST_NAME, payload: e.target.value })}
        label="First Name"
        id="firstName"
      />
      <InputField
        placeholder="Enter Last Name..."
        value={formData.lastName}
        error={(isError && !formData.lastName)}
        onChange={(e) => setFormData({ type: ActionTypes.CHANGE_LAST_NAME, payload: e.target.value })}
        label="Last Name"
        id="lastName"
      />
    </fieldset>
  );
}

export default UserNameForm;
