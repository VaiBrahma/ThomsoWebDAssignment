import React from 'react'
import './Card.css'
import Stars from '../Stars/Stars'
import { NavLink } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { addMovie } from '../../store/movieSlice';
const Card = ({movies}) => {
  const handleClick = ()=>{
    localStorage.setItem('movies', JSON.stringify(movies));
  }
  return (
    <div className='shadow-sm card bg-white gap-1 rounded-2xl m-9 p-[20px] justify-center items-center flex flex-col w-[250px] h-[480px] transform hover:scale-[1.04]'>
        <div className='w-full text-[#4f4f75] text-[0.9rem] font-bold'><div className='text-left'>MOVIE DETAILS</div></div>
        <div className='relative m-2 background w-[180px] h-[260px] rounded-md'>
          <img className='fancyShadow' src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt="" />
          <img className='front relative' src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt="" />
        </div>
        <div className='text-[#000000b3] text-center font-serif text-[0.9em] font-[600]'>{movies.title}</div>
        <Stars number={movies.vote_average}/>
        <div className='text-[#4f4f75ed] h-[50px] text-[0.7em] text-center line-clamp-3'>{movies.overview}</div>
        <div className='w-full'> <NavLink to={`${movies.id}`}> <button className='w-[26px] h-[25dpx] p-[5px] rounded-full bg-[#6b6b6b]' onClick={handleClick}><img src="/arrow.png" alt="<-" /></button> </NavLink></div>
    </div>
  )
}

export default Card