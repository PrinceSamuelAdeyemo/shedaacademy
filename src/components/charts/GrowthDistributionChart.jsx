import React from 'react'
import { Bar } from 'react-chartjs-2'
import Plot from 'react-plotly.js'
import { BarChart } from "@mui/x-charts/BarChart"
import { ResponsiveBar  } from '@nivo/bar'

const GrowthDistributionChart = ({ chartData }) => {

  const newdata = [
    {
      "course": "Frontend Development",
      "Students": 5,
      "New Students": 4
    },
    {
      "course": "Backend Development",
      "Students": 7,
      "New Students": 4
    },
    {
      "course": "Product Design",
      "Students": 10,
      "New Students": 4
    },
    {
      "course": "Social Media Management",
      "Students": 15,
      "New Students": 4
    },
    {
      "course": "Devops",
      "Students": 25,
      "New Students": 4
    },
    {
      "course": "Blockchain",
      "Students": 30,
      "New Students": 4
    },
    
  ]

  return (
    <div className='w-full h-full'>
      <div className='flex justify-between'>
        <p className='text-shedagray font-medium'>GROWTH DISTRIBUTION</p>
        <div className='flex gap-6'>
          <div className='flex gap-2 items-center'>
            <div className='w-2 h-2' style={{backgroundColor: '#8979FF'}}></div>
            <p>Students</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className='w-2 h-2' style={{backgroundColor: '#FF928A'}}></div>
            <p>New Students</p>
          </div>
        </div>
      </div>
      <ResponsiveBar
      data = {newdata}
      indexBy = 'course'
      keys={ ['Students', 'New Students']}
      margin= {{top:20, right:20, left:40, bottom:50}}
      padding={0.3}
      groupMode='stacked'
      layout='vertical'
      enableGridX= {true}
      colors={['#8979FF', '#FF928A']}
      colorBy="id"
      enableLabel = {false}

    />
    </div>
      

       
  )
}

export default GrowthDistributionChart