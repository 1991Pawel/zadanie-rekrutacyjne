import React from 'react';
import styles from 'components/AddFormItem/AddFormItem.module.scss';
import { useForm } from 'hooks/useForm';
import FormInput from 'components/FormInput/FormInput';

const initialState = {
  name: '',
  extended: false
};

const AddFormItem = () => {
  const { values, handleChange } = useForm(initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    console.log('handleSubmit');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormInput
        label="name"
        type="text"
        name="name"
        value={values.name}
        handleChange={handleChange}
        required
      />
      <FormInput
        label="extended"
        name="extended"
        type="checkbox"
        value={values.name}
        handleChange={handleChange}
        checked={values.extends}
      />
      <button type="submit" className={styles.formBtn}>
        Add
      </button>
    </form>
  );
};

export default AddFormItem;
