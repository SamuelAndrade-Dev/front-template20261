import './EmailInput.css';

export default function EmailInput({ value, onChange, error }) {
  return (
    <div className="field">
      <label className="label" htmlFor="email">Email:</label>
      <input
        className="input"
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="username"
      />

      <p className={error ? 'error-message show' : 'error-message'} role="alert" aria-live="polite">
        {error}
      </p>
    </div>
  );
}

