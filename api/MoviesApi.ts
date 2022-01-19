import axios from 'axios';
import {useQuery} from 'react-query';

export type MoviesData = {
  Provider: string;
  Movies: Array<{
    ID: string;
    Title: string;
    Type: string;
    Poster: string;
    Actors: string;
    Price: number;
  }>;
};

// need to better handle this rather than putting keys here in project
const key = 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7';

export async function fetchCinemaWorld(): Promise<MoviesData> {
  const {data} = await axios.get<MoviesData>(
    'https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies',
    {
      headers: {
        'x-api-key': key,
      },
    },
  );
  return data;
}

export async function fetchFilmWorld(): Promise<MoviesData> {
  const {data} = await axios.get<MoviesData>(
    'https://challenge.lexicondigital.com.au/api/v2/filmworld/movies',
    {
      headers: {
        'x-api-key': key,
      },
    },
  );
  return data;
}
