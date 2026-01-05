export const LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PHOTO_URL = "https://avatars.githubusercontent.com/u/67372928";
export const NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?page=1';
export const TOP_RATED_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?page=1';
export const UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming?page=1';
export const BACKGROUND_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/US-en-20251215-TRIFECTA-perspective_222a4d2f-dd7e-4533-9a42-1497998bfb4e_small.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_TOKEN
  }
};

export const IMG_CDN="https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [{ code: 'en', name: 'English' },
{ code: 'es', name: 'Spanish' },
{ code: 'fr', name: 'French' },
{ code: 'te', name: 'Telugu' },
];

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;