import { useState} from 'react';
import MovieCard from './MovieCard';
import axios from 'axios'
import searchIcon from './search.svg'




 

 function App(){

    let newdata;
    
    const [first, setfirst] = useState([]);
    const [search, setsearch] = useState("");


    



    async function movieSearch(title){
        const API_KEY = `http://www.omdbapi.com/?i=tt3896198&apikey=a1df834f&s=${title}`
        await axios.get(API_KEY)
        .then(data => {
            newdata = [data.data.Search][0]
            setfirst(newdata)
        
        })
    
    }
    

    


    return(
        <>
            <div className="app">
                <h1>Movie Ratings App</h1>

                <div className="search">
                    <input
                    placeholder="Search For Movies"
                    value={search}
                    onChange = {(e)=>{setsearch(e.target.value)}}
                    />
                    
                    <img 
                    src={searchIcon} 
                    alt="search"
                    onClick = {() => 
                    movieSearch(search)} />

                
                </div>

                

                {first ? 
    
                (
                <div  className="container">
                    {first.map((movier) => <MovieCard key={movier.imdbID} movie={movier}/>)}

                </div>):
    (
        <div className='empty'>
      <h2>No Movies Where Found</h2>
  </div>)}
            </div>
            </>
    );
    };
  
export default App;

