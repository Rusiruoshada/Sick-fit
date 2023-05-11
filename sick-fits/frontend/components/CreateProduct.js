import useForm from '../lib/useForm';
import Form from './styles/Form';

function CreateProduct() {
  const { input, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'nice shoes',
    price: 123,
    description: 'nothing change',
  });

  return (
    <>
      <Form action="#" onSubmit={(e) => {e.preventDefault()}}>
        <fieldset>
          <label htmlFor="image">
            Image:
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
            />
          </label>
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
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={input.description}
              onChange={handleChange}
            />
          </label>

          <button type="submit">+ Add Product</button>
        </fieldset>
      </Form>
    </>
  );
}

export default CreateProduct;
