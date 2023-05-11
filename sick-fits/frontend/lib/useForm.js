import { useState } from 'react';

function useForm(initial = {}) {
  const [input, setInput] = useState(initial);

  function handleChange(e) {
    let { value, type, name } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      value[0] = e.target.files;
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
