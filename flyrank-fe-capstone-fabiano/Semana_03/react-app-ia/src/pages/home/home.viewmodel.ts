import { useState } from 'react';
import { searchMovies } from '../../services/omdb.service';
import type { Movie } from './home.model';

export function useHomeViewModel() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch() {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const results = await searchMovies(query);
      const mapped: Movie[] = results.map((m) => ({
        id: m.imdbID,
        title: m.Title,
        year: m.Year,
        type: m.Type,
        poster: m.Poster,
      }));
      setMovies(mapped);
    } catch (e: any) {
      setError(e.message ?? 'Erro ao buscar filmes');
    } finally {
      setLoading(false);
    }
  }

  return {
    state: {
      query,
      movies,
      loading,
      error,
    },
    actions: {
      setQuery,
      handleSearch,
    },
  };
}
