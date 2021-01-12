import React from 'react';
import styles from 'components/AddFormSubitem/AddFormSubitem.module.scss';
import { useForm } from 'hooks/useForm';
import FormInput from 'components/FormInput/FormInput';
import { useListContext } from 'context/ListContext';
const initialState = {
  name: ''
};
type AddFormSubmitProps = {
  extendedFormId: number;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddFormSubitem = ({
  extendedFormId,
  setOpenModal
}: AddFormSubmitProps) => {
  const { values, handleChange } = useForm(initialState);
  const { addItemToSublist } = useListContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItemToSublist({
      ...values,
      id: extendedFormId
    });
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
      <button type="submit" className={styles.formBtn}>
        Add
      </button>
    </form>
  );
};

export default AddFormSubitem;
