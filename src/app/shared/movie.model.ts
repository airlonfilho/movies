export default class Movie {
  adult: boolean
  backdrop_path: string
  budget: number
  genres: genrs[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: production_companies[]
  release_date: string
  revenue: number
  runtime: number
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export function getImage(imagem: string): string {
  return `https://image.tmdb.org/t/p/w500/${imagem}`;
}

interface genrs {
  id: number
  name: string
}

interface production_companies {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

