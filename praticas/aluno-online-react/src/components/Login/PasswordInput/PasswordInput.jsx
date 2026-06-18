import './PasswordInput.css';

export default function PasswordInput({ value, onChange, error }) {
  return (
    <div className="field">
      <label className="label" htmlFor="password">Senha:</label>
      <input
        className="input"
        type="password"
        id="password"
        name="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="current-password"
      />

      <p className={error ? 'error-message show' : 'error-message'} role="alert" aria-live="polite">
        {error}
      </p>
    </div>
  );
}

