export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTgwN2YyMmEzOTc4MTdlYjkzYzMzZjc4OTI2NjlmMSIsIm5iZiI6MTcyMjM1ODEyNS4xNTEyODMsInN1YiI6IjY2YTkxNmUyYWZjNDU4MjFiNWViYzdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BY0qrM7soo78qvCkJHel6I3an6AzdFhGciu39Jjmsbk',
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