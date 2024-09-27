import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const AcademyDistributionChart = () => {
  const newdata = [
    {
      id: 'Applicants',
      color: 'hsl(348, 70%, 50%)',
      data: [
        {x: "Jan", y: 5},
        {x: "Feb", y: 15},
        {x: "Mar", y: 3},
        {x: "Apr", y: 23},
        {x: "May", y: 45},
        {x: "Jun", y: 33},
        {x: "Jul", y: 20},
        {x: "Aug", y: 15},
        {x: "Sep", y: 21},
        {x: "Oct", y: 12},
        {x: "Nov", y: 4},
        {x: "Dec", y: 6},
      ]
    },
    
    {
      id: 'Students',
      color: 'hsl(100, 70%, 50%)',
      data: [
        {x: "Jan", y: 5},
        {x: "Feb", y: 7},
        {x: "Mar", y: 9},
        {x: "Apr", y: 35},
        {x: "May", y: 47},
        {x: "Jun", y: 48},
        {x: "Jul", y: 48},
        {x: "Aug", y: 50},
        {x: "Sep", y: 45},
        {x: "Oct", y: 44},
        {x: "Nov", y: 30},
        {x: "Dec", y: 25},
      ]
    },
  ]

  

  return (
    <div className='flex flex-col gap-4 h-full w-full'>
      <div className='flex justify-between'>
        <p className='text-shedagray font-medium'>ACADEMY DISTRIBUTION</p>
        <div className='flex gap-6'>
          <div className='flex gap-2 items-center'>
            <div className='flex items-center relative w-5 h-5 rounded-full border-2 border-shedalightpurple'>
              <div className='w-full h-[2px]' style={{backgroundColor: '#8979FF'}}></div>
              <div className='w-1/2 h-1/2 rounded-full absolute left-1' style={{backgroundColor: '#8979FF'}}></div>
            </div>
            <p>Applicants</p>
          </div>
          <div className='flex gap-2 items-center'>
          <div className='flex items-center relative w-5 h-5 rounded-full border-2 border-shedalightpurple'>
              <div className='w-full h-[2px]' style={{backgroundColor: '#FF928A'}}></div>
              <div className='w-1/2 h-1/2 rounded-full absolute left-1' style={{backgroundColor: '#FF928A'}}></div>
            </div>
            <p>Students</p>
          </div>
        </div>
      </div>

      <ResponsiveLine
      data={newdata}
      margin= {{top:20, right:20, left:40, bottom:50}}
      enableArea={true}
      enablePointLabel={true}
      colors={['#FF928A', '#8979FF']}
      useMesh={true}
      isInteractive={true}
      />
      
    </div>
  )
}

export default AcademyDistributionChart