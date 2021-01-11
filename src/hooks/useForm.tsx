import { useState } from 'react';

export const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'checkbox') {
      setValues({
        ...values,
        [e.target.name]: e.target.checked
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  };

  return { values, setValues, handleChange };
};
