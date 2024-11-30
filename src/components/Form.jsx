
const Form = () => (
  <form className="data-form">
    <h2>Formulario de Datos Personales</h2>
    <label>
      Nombre:
      <input type="text" name="name" required />
    </label>
    <label>
      Correo Electrónico:
      <input type="email" name="email" required />
    </label>
    <button type="submit">Enviar</button>
  </form>
);

export default Form;
