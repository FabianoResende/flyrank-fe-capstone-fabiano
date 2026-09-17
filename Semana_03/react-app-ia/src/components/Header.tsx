import { Link } from 'react-router-dom';

type HeaderProps = {
  onSearchChange?: (value: string) => void;
  onSearchSubmit?: () => void;
};

export function Header({ onSearchChange, onSearchSubmit }: HeaderProps) {
  return (
    <header style={{ padding: '16px', display: 'flex', gap: '16px', alignItems: 'center', background: '#111', color: '#fff' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#61dafb', fontWeight: 'bold' }}>
        React App IA
      </Link>

      <Link to="/favorites" style={{ textDecoration: 'none', color: '#fff' }}>
        Favoritos
      </Link>

      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
        style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #333' }}
      />

      <button
        onClick={onSearchSubmit}
        style={{ padding: '8px 16px', borderRadius: '4px', border: 'none', background: '#61dafb', cursor: 'pointer' }}
      >
        Buscar
      </button>
    </header>
  );
}
