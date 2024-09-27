import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Plot from 'react-plotly.js'
import { ResponsivePie } from '@nivo/pie'

const StudentDistributionChart = () => {

  const newdata = [
    {
      "course": "Frontend Development",
      "Students": 5,
    },
    {
      "course": "Backend Development",
      "Students": 7,
    },
    {
      "course": "Product Design",
      "Students": 10,
    },
    {
      "course": "Social Media Management",
      "Students": 15,
    },
    {
      "course": "Devops",
      "Students": 25,
    },
    {
      "course": "Blockchain",
      "Students": 30,
    },
    
  ]
/* 
  const data = [
    {
      values: [25, 22, 29, 15, 10, 10],
      labels: ["Frontend Development", "Backend Development", "Product Design", "Social media management", "Devops", "Blockchain"],
      hole: .7,
      type: 'pie'
    }
  ]

  const layout = {
    title: 'STUDENTS DISTRIBUTION',
    annotations: [
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: '100',
        x: 0.5,
        y: 0.5
      }
    ]
  } */

  return (
    <div className='h-full w-full'>
      <div className='flex justify-center'>
        <p className='font-medium text-shedagray '>STUDENTS DISTRIBUTION</p>
      </div>
        <ResponsivePie
        data={newdata}
        id={'course'}
        value={'Students'}
        innerRadius={0.7}
        margin={{top:20, left:20, right:20, bottom:50}}
        colors={['#8979FF', '#FF928A', '#3CC3DF', '#FFAE4C', '#B30608', '#757E9F']}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        isInteractive={true}

         />
    </div>
  )
}

export default StudentDistributionChart