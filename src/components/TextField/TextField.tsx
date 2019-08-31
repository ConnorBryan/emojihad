import { useField } from "formik";
import React from "react";

export default function TextField({ label, ...props }: any) {
  const [field, { touched, error }] = useField(props);

  return (
    <div>
      <label>
        {label}
        <br />
        <input {...field} {...props} />
      </label>
      {touched && error && <div className="error">{error}</div>}
    </div>
  );
}
