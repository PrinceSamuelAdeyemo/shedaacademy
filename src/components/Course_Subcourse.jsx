import React from 'react'

const Course_Subcourse = (props) => {
    var sub_coursename = props.sub_coursename
  return (
    
    <div className='flex w-[90%] gap-2 items-center'>
        <div className='w-4 h-4 rounded-full bg-shedagray'></div>
        <p>{sub_coursename}</p>
    </div>
  )
}

export default Course_Subcourse