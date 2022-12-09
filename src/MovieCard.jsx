import React from 'react';

function MovieCard ({movie: {  Year, Poster, Title, Type }}){
    return(
      
        <div className="movcard">
            <img className='imgg' src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            <h5 className="card-title1">{Title}</h5>
            <h6 className="card-sub">{Year}</h6>
            <h6 className="card-sub">{Type}</h6>
        </div>    
    );


}

export default MovieCard;


