import './Card.css';

export default function Card({ titulo, children }) {
  return (
    <article className="info-card">
      <header className="info-card-header">
        <h3>{titulo}</h3>
      </header>
      <section className="info-card-content">
        {children}
      </section>
    </article>
  );
}