import { Header } from '../../components/Header';
import { useHomeViewModel } from './home.viewmodel';

export function HomeView() {
  const { state, actions } = useHomeViewModel();

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff' }}>
      <Header
        onSearchChange={actions.setQuery}
        onSearchSubmit={actions.handleSearch}
      />

      <main style={{ padding: '16px' }}>
        {state.loading && <p>Carregando...</p>}
        {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

        {!state.loading && !state.error && state.movies.length === 0 && (
          <p>Digite um termo de busca para encontrar filmes.</p>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
          {state.movies.map((movie) => (
            <div key={movie.id} style={{ background: '#111', padding: '8px', borderRadius: '8px' }}>
              {movie.poster !== 'N/A' && (
                <img
                  src={movie.poster}
                  alt={movie.title}
                  style={{ width: '100%', borderRadius: '4px', marginBottom: '8px' }}
                />
              )}
              <h3>{movie.title}</h3>
              <p>{movie.year} • {movie.type}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
