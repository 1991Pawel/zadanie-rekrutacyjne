import React from 'react';
import styles from 'components/AddFormItem/AddFormItem.module.scss';
import { useForm } from 'hooks/useForm';
import FormInput from 'components/FormInput/FormInput';
import { useListContext } from 'context/ListContext';

const initialState = {
  name: '',
  extended: false
};
type AddFormItemProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddFormItem = ({ setOpenModal }: AddFormItemProps) => {
  const { values, handleChange } = useForm(initialState);
  const { addItemToList } = useListContext();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItemToList(values);
    setOpenModal(false);
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
