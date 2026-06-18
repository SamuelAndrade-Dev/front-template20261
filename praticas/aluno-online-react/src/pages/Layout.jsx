export default function Layout({ subtitulo, children }) {
  return (
    <div className="page-padding">
      <header className="page-info">
        <h3>{subtitulo}</h3>
      </header>
      {children}
    </div>
  );
}