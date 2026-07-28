const OMDB_BASE_URL = 'https://www.omdbapi.com/';

type OmdbMovie = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
};

type OmdbSearchResponse = {
  Search?: OmdbMovie[];
  totalResults?: string;
  Response: 'True' | 'False';
  Error?: string;
};

export async function searchMovies(query: string): Promise<OmdbMovie[]> {
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;

  if (!apiKey) {
    throw new Error('OMDB API key not configured');
  }

  const url = `${OMDB_BASE_URL}?apikey=${apiKey}&s=${encodeURIComponent(query)}`;

  const res = await fetch(url);
  const data: OmdbSearchResponse = await res.json();

  if (data.Response === 'False' || !data.Search) {
    return [];
  }

  return data.Search;
}
