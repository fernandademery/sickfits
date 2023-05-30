import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Nice shoes',
    price: 34234,
    description: 'These are the best shoes!',
  });
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={inputs.price}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <button onClick={resetForm} type="button">
        Reset form
      </button>

      <button onClick={clearForm} type="button">
        Clear form
      </button>
    </form>
  );
}
