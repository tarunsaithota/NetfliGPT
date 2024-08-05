export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
  };

export const POSTER_CDN = 'https://image.tmdb.org/t/p/w500/'
export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: 'English'},
  {identifier: "telugu", name: 'Telugu'},
  {identifier: "hindi", name: 'Hindi'},
  {identifier: "spanish", name: 'Spanish'}
]
export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY