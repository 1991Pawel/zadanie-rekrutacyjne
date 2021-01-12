import React from 'react';
import styles from 'components/FormInput/FormInput.module.scss';

type FormInputProps = {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  type: string;
  name: string;
  value: string;
  required?: boolean;
  otherProps?: [];
  checked?: boolean;
};

const FormInput = ({ handleChange, label, ...otherProps }: FormInputProps) => (
  <label className={styles.label}>
    {label}
    <input className={styles.input} onChange={handleChange} {...otherProps} />
  </label>
);

export default FormInput;
