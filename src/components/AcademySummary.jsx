import React, { useEffect, useState } from 'react'

import overview_api from '../utils/admin/dashboard/overview'

const AcademySummary = ({ time_frame }) => {
    const [academy_Overview, setAcademy_Overview] = useState({})

    const AdminHomepageInfo = () => {
        overview_api.get('', {
          params: {
            timeFrame: time_frame
          }
        })
        .then((response) => {
          console.log(response);
          setAcademy_Overview(response.data["data"]);
        })
      }

    useEffect(() => {
        AdminHomepageInfo();
    }, [])

  return (
    <div className='flex flex-col lg:flex-row justify-center gap-4 lg:gap-8 lg:px-0 w-full'>
        <div className='flex flex-col justify-center w-full h-24 rounded-lg border-shedagray-400 px-4 border-[1px]'>
            <p className="text-shedagray text-sm font-semibold">ACTIVE STUDENTS</p>
            <div className='flex'>
                <p className='font-semibold text-black text-4xl'>{academy_Overview? academy_Overview["active_students"]: '-'}</p>
                <p className='bg-shedamuchlightgreen text-shedalightgreen text-sm text-center self-end'>+{academy_Overview? academy_Overview["applicants"]: '-'}</p>
            </div>
        </div>
        <div className='flex flex-col justify-center w-full h-24 rounded-lg border-shedagray-400 px-4 border-[1px]'>
            <p className="text-shedagray text-sm">GRADUATES</p>
            <div className='flex'>
                <p className='font-semibold text-black text-4xl'>9000</p>
                <p className='bg-shedamuchlightgreen text-shedalightgreen text-sm text-center self-end'>+10</p>
            </div>
        </div>
        <div className='flex flex-col justify-center w-full h-24 rounded-lg border-shedagray-400 px-4 border-[1px]'>
            <p className="text-shedagray text-sm">OUTLIERS</p>
            <div className='flex'>
                <p className='font-semibold text-black text-4xl'>9000</p>
                <p className='bg-shedamuchlightgreen text-shedalightgreen text-sm text-center self-end'>+10</p>
            </div>
        </div>
        <div className='flex flex-col justify-center w-full h-24 rounded-lg border-shedagray-400 px-4 border-[1px]'>
            <p className="text-shedagray text-sm">GRADUATION RATE</p>
            <div className='flex'>
                <p className='font-semibold text-black text-4xl'>80%</p>
                <p className='bg-shedamuchlightgreen text-shedalightgreen text-sm text-center self-end'>+10</p>
            </div>
        </div>
    </div>
  )
}

export default AcademySummary