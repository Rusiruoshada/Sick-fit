import useForm from '../lib/useForm';

function CreateProduct() {
  const { input, handleChange, clearForm, resetForm } = useForm({
    name: 'nice shoes',
    price: 123,
    description: 'nothing change',
  });

  return (
    <>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price:
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={input.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={input.description}
            onChange={handleChange}
          />
        </label>

        <button type="button" onClick={clearForm}>
          Clear
        </button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </>
  );
}

export default CreateProduct;
