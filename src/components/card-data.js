
const requests = {
    fetchPage1: `https://api.themoviedb.org/3/keyword/210024/movies?api_key=206b725c7666fcf8a08aade57ba94850&page=1`,
    fetchPage2: `https://api.themoviedb.org/3/keyword/210024/movies?api_key=206b725c7666fcf8a08aade57ba94850&page=2`,
    fetchPage3: `https://api.themoviedb.org/3/keyword/210024/movies?api_key=206b725c7666fcf8a08aade57ba94850&page=3`,
    fetchPage4: `https://api.themoviedb.org/3/keyword/210024/movies?api_key=206b725c7666fcf8a08aade57ba94850&page=4`,
    fetchPage5: `https://api.themoviedb.org/3/keyword/210024/movies?api_key=206b725c7666fcf8a08aade57ba94850&page=5`,
    fetchPage6: `https://api.themoviedb.org/3/keyword/210024/movies?api_key=206b725c7666fcf8a08aade57ba94850&page=6`,
    fetchPage7: `https://api.themoviedb.org/3/keyword/210024/movies?api_key=206b725c7666fcf8a08aade57ba94850&page=7`,
};

export default requests;
// function FetchPage() {
//   const [anime1, setAnime1] = useState([]);
//   useEffect(() => {
//       async function getData1() {
//         const request = await axios.get(
//           `https://api.themoviedb.org/3/keyword/210024/movies?api_key=206b725c7666fcf8a08aade57ba94850&page=1`
//         );
//         setAnime1( request.data.results);
//       }
//       getData1();
   
//   }, []);

//   // console.log(anime);
//   return (
//     <div className="fetchPage">
//       <Body anime={anime1} />
//     </div>
//   );
// }
// function FetchPage2() {
//   const [anime2, setAnime2] = useState([]);
//   useEffect(() => {
//       async function getData2() {
//         const request = await axios.get(
//           `https://api.themoviedb.org/3/keyword/210024/movies?api_key=206b725c7666fcf8a08aade57ba94850&page=2`
//         );
//         setAnime2( request.data.results);
//       }
//       getData2();
   
//   }, []);

//   // console.log(anime);
//   return (
//     <div className="fetchPage">
//       <Body anime={anime2} />
//     </div>
//   );
// }