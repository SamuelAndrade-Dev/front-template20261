import './Input.css';

function Input({ label, type, name, value, onChange, error }) {
  return (
    <section className="input-group">
      <label htmlFor={name}>{label}</label>

      <input 
        type={type} 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChange}
      />

      {error && <span className="error-text">{error}</span>}
    </section>
  );
}

export default Input;