import React from 'react';
import styles from 'components/AddForm/AddForm.module.scss';
import { useForm } from 'hooks/useForm';
import FormInput from 'components/FormInput/FormInput';
import { useListContext } from 'context/ListContext';

const initialState = {
  name: '',
  extended: false
};

const AddForm = () => {
  const { values, setValues, handleChange } = useForm(initialState);
  const { listItems, addItemToList } = useListContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItemToList(values);
    console.log(values);
    setValues(initialState);
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
      {!values.extends && (
        <FormInput
          label="extended"
          name="extended"
          type="checkbox"
          value={values.name}
          handleChange={handleChange}
          checked={values.extends}
        />
      )}
      <button type="submit" className={styles.formBtn}>
        Add
      </button>
    </form>
  );
};

export default AddForm;
