import React from 'react';
import styles from 'components/FormInput/FormInput.module.scss';

const FormInput = ({ handleChange, label, ...otherProps }: any) => (
  <label className={styles.label}>
    {label}
    <input className={styles.input} onChange={handleChange} {...otherProps} />
  </label>
);

export default FormInput;
