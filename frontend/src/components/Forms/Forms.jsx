import React from 'react'
import './Forms.css'

const Forms = ({movie, handleClick}) => {
  return (
    <div className='w-full h-full p-10'>
      <form action="/">

      <div className="crossbar relative"><div className="cross absolute bottom-8 right-[-2.7rem]" onClick={handleClick}>X</div></div>

        <div className='formregion mt-12'>
          <label>Name:</label>
          <input type="text"  className='p-4'/>
        </div>

        <div className='formregion'>
          <label>Contact Number:</label>
          <input type="Number"  className='p-4'/>
        </div>

        <div className='formregion'>
          <label>Movie Name:</label>
          <input type="text" className='readonly p-4' value={movie.title} readonly />
        </div>
        
        <div className='formregion'>
          <label>Number of tickets:</label>
          <input type="Number" className='p-4' />
        </div>

        <div className='btn text-center'>Submit</div>
      </form>
    </div>
  )
}

export default Forms