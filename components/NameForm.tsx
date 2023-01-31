import { ActionTypes, useAppStore } from "../hooks/app.provider";
import InputField from "./InputField";

function UserNameForm() {
  const { formData, setFormData } = useAppStore();

  return (
    <fieldset className="w-full px-12">
      <InputField
        placeholder="Enter First Name..."
        value={formData.firstName}
        onChange={(e) => setFormData({ type: ActionTypes.CHANGE_FIRST_NAME, payload: e.target.value })}
        label="First Name"
        id="firstName"
      />
      <InputField
        placeholder="Enter Last Name..."
        value={formData.lastName}
        onChange={(e) => setFormData({ type: ActionTypes.CHANGE_LAST_NAME, payload: e.target.value })}
        label="Last Name"
        id="lastName"
      />
    </fieldset>
  );
}

export default UserNameForm;
