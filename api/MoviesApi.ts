import axios from 'axios';

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

// need to better handle this rather than putting keys here in the project. 
// putting real keys in repos and having them accessible in git history should be avoided 
const key = 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7';
const api = 'https://challenge.lexicondigital.com.au/api/v2';

const endpoints =  {
cinemaWorld :  `${api}/cinemaworld/movies`,
filmWorld : `${api}/filmworld/movies`
}

export async function fetchCinemaWorld(): Promise<MoviesData> {
  const {data} = await axios.get<MoviesData>(endpoints.cinemaWorld,
    {
      headers: {
        'x-api-key': key,
      },
    },
  );
  return data;
}

export async function fetchFilmWorld(): Promise<MoviesData> {
  const {data} = await axios.get<MoviesData>(endpoints.filmWorld,
    {
      headers: {
        'x-api-key': key,
      },
    },
  );
  return data;
}
