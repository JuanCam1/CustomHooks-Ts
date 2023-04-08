import { ChangeEvent, useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {
  const [data, setData] = useState(initialState);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setData({ ...data, [name]: value });
  };

  const handleReset = (onReset: boolean) => {
    onReset && setData(initialState);
  };

  return {
    data,
    handleChange,
    handleReset,
  };
};

export default useForm;
