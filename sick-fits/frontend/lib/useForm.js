import { useEffect, useState } from 'react';

function useForm(initial = {}) {
  const [input, setInput] = useState(initial);
  const initialValue = Object.values(initial).join('');

  useEffect(() => {
    setInput(initial);
  }, [initialValue]);

  function handleChange(e) {
    let { value, type, name } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInput({
      ...input,
      [name]: value,
    });
  }

  function resetForm() {
    setInput(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(input).map(([key, value]) => [key, ''])
    );
    setInput(blankState);
  }

  return {
    input,
    handleChange,
    clearForm,
    resetForm,
  };
}

export default useForm;
