
const requests = {
    fetchPage1: `https://api.themoviedb.org/4/list/7101144?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    fetchPage2: `https://api.themoviedb.org/4/list/7101145?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    fetchPage3: `https://api.themoviedb.org/4/list/7101146?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    fetchPage4: `https://api.themoviedb.org/4/list/7101144?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    fetchPage5: `https://api.themoviedb.org/4/list/7101151?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    fetchPage6: `https://api.themoviedb.org/4/list/7101147?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    fetchPage7: `https://api.themoviedb.org/4/list/7101150?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
};

export default requests;
