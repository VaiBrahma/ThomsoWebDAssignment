import React, { useState, useSyncExternalStore } from 'react'
import './Booking.css'
import {useSelector} from 'react-redux';
import Stars from '../../components/Stars/Stars';
import { Form } from 'react-router-dom';
import Forms from '../../components/Forms/Forms';

const Booking = () => {

    const [flag, setFlag] = useState(false);
    // const query = location.pathname;
    // let id = query.substring(1);
    // id = parseInt(id);

    // const movies = useSelector(state => state.movie);
    // console.log(movies.movie[1]);

    // function searchByKey(array, key, searchTerm) {
    //     return array.filter(obj => obj[key] === searchTerm);
    // }
    // const results = searchByKey(movies.movie[1], 'id', id);
    // const movies = useSelector(state => state.movie);

    const movie = JSON.parse(localStorage.getItem('movies'));

    const handleClick=()=>{
        setFlag(e=>!flag);
        console.log(flag);
    }

  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className="containerr flex">
            <div className="h-full"><img className='left img ' src={`https://image.tmdb.org/t/p/original/${movie.poster_path})`} alt="" /></div>
            <div className="right flex flex-col justify-center items-center">

                <div className='movietitle'>{movie.title.toUpperCase()}</div>
                <div className='scale-[1.5] inline-block'>
                    <Stars number={movie.vote_average}/>
                </div>
                <div className='overview'>{movie.overview}</div>
                <button className='hoverstate bg-[#000c] pl-4 text-white rounded-md p-2 flex justify-center items-center' onClick={handleClick} >BOOK NOW <img src="/arrow.png" alt="->" className='arrow mx-2 scale-x-[-1.8] h-[11px] w-[11px]' /></button>
            </div>

        </div>
    </div>

    {flag&& <div className="h-screen w-full absolute top-0 flex justify-center items-center bg-[#0000004b]">
        <div className="formPage z-13 shadow-xl">
            <Forms movie={movie} handleClick={handleClick}/>
        </div>
    </div>}
    </>

    // <>
    //     <Forms movie={movie}/>
    // </>
  )
}

export default Booking