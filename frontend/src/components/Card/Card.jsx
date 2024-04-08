import React from 'react'
import './Card.css'
const Card = ({movies}) => {
  function rationalPartGreaterThanHalf(number) {
    // Convert the number to a string
    var strNumber = number.toString();
    
    // Find the index of the decimal point
    var decimalIndex = strNumber.indexOf('.');
    
    // If there is no decimal part, return false
    if (decimalIndex === -1) {
        return false;
    }
    
    // Extract the fractional part
    var fractionalPart = strNumber.substr(decimalIndex + 1);
    
    // Convert the fractional part to a number
    var fractionalNumber = parseInt(fractionalPart, 10);
    
    // Check if the fractional part is greater than 0.5
    return fractionalNumber > 5;
}

  let number1 = movies.vote_average/2;
  let number2 = 0;
  if(rationalPartGreaterThanHalf(number1)) number2 = 1;

  number1 = Math.floor(number1);

  let number3 = 5- number1 - number2;
  return (
    <div className='shadow-sm card bg-white gap-1 rounded-2xl m-9 p-[20px] justify-center items-center flex flex-col w-[250px] h-[480px] transition duration-200 transform hover:scale-[1.04]'>
        <div className='w-full text-[#4f4f75] text-[0.9rem] font-bold'><div className='text-left'>MOVIE DETAILS</div></div>
        <div className='m-2 background w-[180px] h-[260px] rounded-md' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies.poster_path})`}}></div>
        <div className='text-[#000000b3] text-center font-serif text-[0.9em] font-[600]'>{movies.title}</div>
        <div className='m-auto flex'>
          {Array(number1).fill().map((_, index) => (
            <div key={index} className='h-[18px] w-[18px]'><img src="/star.png" alt="" /></div>
          ))}
          {Array(number2).fill().map((_, index) => (
            <div key={index} className='h-[18px] w-[18px]'><img src="/star2.png" alt="" /></div>
          ))}
          {Array(number3).fill().map((_, index) => (
            <div key={index} className='h-[18px] w-[18px]'><img src="/star1.png" alt="" /></div>
          ))}
        </div>
        <div className='text-[#4f4f75ed] h-[50px] text-[0.7em] text-center line-clamp-3'>{movies.overview}</div>
        <div className='w-full'><button className='w-[26px] h-[25dpx] p-[5px] rounded-full bg-[#6b6b6b]'><img src="/arrow.png" alt="<-" /></button></div>
    </div>
  )
}

export default Card