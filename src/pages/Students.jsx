import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import AcademySummary from '../components/AcademySummary'

const Students = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col gap-1 w-[97%]'>

        <div className='flex items-center justify-between h-[5rem] shadow-black w-full'>
          <div className='flex gap-4'>
            <FaAngleLeft />
            <FaAngleRight />
          </div>
          <div className='w-[15%]'>
            <img src="" alt="" />
            <div>
              <p className='font-semibold text-lg'>Mr Tim</p>
              <p className='text-sm'>mrtim@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='w-full bg-gray-100 h-[1px]'></div>

        <div className='flex justify-between items-center h-[5rem] w-full'>
          <p className='text-black text-[1.5rem] font-semibold pl-10'>Overview</p>
          <select name="period" id="" className='border-[1px] h-10 text-shedagray'>
            <option value="current-week">This week</option>
            <option value="current-month">This month</option>
            <option value="current-year">This year</option>
          </select>
        </div>

        <AcademySummary />

        <div className='flex items-center justify-between w-full mt-6 h-[4rem]'>
          <input type="search" name="" id="" placeholder='Search' className='rounded-md h-2/3 lg:w-[10%] xl:w-[20%] border-[1px] px-2' />
          <div className='flex justify-between lg:w-[75%] xl:w-[50%]'>
            <div className='flex gap-2'>
              <p className='text-shedagray text-lg font-small'>Status is:</p>
              <select name="status" id="" className='rounded-md text-black bg-shedapagebg'>
                <option value="All">All</option>
                <option value="Students">Students</option>
                <option value="Graduates">Graduates</option>
                <option value="Outliers">Outliers</option>
              </select>
            </div>
            <div className='flex gap-2'>
              <p className='text-shedagray text-lg font-small'>Program is:</p>
              <select name="status" id="" className='rounded-md text-black bg-shedapagebg'>
                <option value="All">All</option>
                <option value="frontend">Frontend Development</option>
                <option value="">Backend Development</option>
                <option value="">Data Analytics</option>
                <option value="">Photography</option>
                <option value="">Videography</option>
                <option value="">Digital Marketing</option>
                <option value="">Product Design</option>
              </select>
            </div>
            <div className='flex gap-2'>
              <p className='text-shedagray text-lg font-small'>Fees is/are:</p>
              <select name="status" id="" className='rounded-md text-black bg-shedapagebg'>
                <option value="All">All</option>
                <option value="Students">Students</option>
                <option value="Graduates">Graduates</option>
                <option value="Outliers">Outliers</option>
              </select>
            </div>
          </div>
          <button className='bg-shedared rounded-md text-white h-2/3 w-[10%]'>+ Add new student</button>
        </div>

        <div className='w-full'>
          <table className='w-full table-fixed'>
            <thead className='bg-shedapagebg rounded-md h-[3rem]'>
              <tr>
                <th className='lg:w-[3%]'><input type="checkbox" name="" id="" /></th>
                <th className='text-shedagray text-lg font-normal text-start'>Name</th>
                <th className='text-shedagray text-lg font-normal text-start'>Email</th>
                <th className='text-shedagray text-lg font-normal text-start'>Status</th>
                <th className='text-shedagray text-lg font-normal text-start'>Program</th>
                <th className='lg:w-[10%] text-shedagray text-lg font-normal text-start'>Fees</th>
              </tr>
            </thead>
            <tbody className=''>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightblue text-shedanormalblue rounded-md text-center font-medium'>Student</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedamuchlightgreen to-shedamuchlightgreen2 text-shedalightgreen rounded-md text-center font-medium'>Paid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightpurple text-shedanormalpurple rounded-md text-center font-medium'>Graduate</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedamuchlightgreen to-shedamuchlightgreen2 text-shedalightgreen rounded-md text-center font-medium'>Paid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightblue text-shedanormalblue rounded-md text-center font-medium'>Student</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedalightred to-shedalightred2 text-shedanewred rounded-md text-center font-medium'>Unpaid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightyellow text-shedanormalyellow rounded-md text-center font-medium'>Outlier</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedamuchlightgreen to-shedamuchlightgreen2 text-shedalightgreen rounded-md text-center font-medium'>Paid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightpurple text-shedanormalpurple rounded-md text-center font-medium'>Graduate</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedamuchlightgreen to-shedamuchlightgreen2 text-shedalightgreen rounded-md text-center font-medium'>Paid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightyellow text-shedanormalyellow rounded-md text-center font-medium'>Outlier</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedalightred to-shedalightred2 text-shedanewred rounded-md text-center font-medium'>Unpaid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightblue text-shedanormalblue rounded-md text-center font-medium'>Student</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedamuchlightgreen to-shedamuchlightgreen2 text-shedalightgreen rounded-md text-center font-medium'>Paid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightpurple text-shedanormalpurple rounded-md text-center font-medium'>Graduate</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedamuchlightgreen to-shedamuchlightgreen2 text-shedalightgreen rounded-md text-center font-medium'>Paid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightyellow text-shedanormalyellow rounded-md text-center font-medium'>Outlier</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedalightred to-shedalightred2 text-shedanewred rounded-md text-center font-medium'>Unpaid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightblue text-shedanormalblue rounded-md text-center font-medium'>Student</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedamuchlightgreen to-shedamuchlightgreen2 text-shedalightgreen rounded-md text-center font-medium'>Paid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightpurple text-shedanormalpurple rounded-md text-center font-medium'>Graduate</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedamuchlightgreen to-shedamuchlightgreen2 text-shedalightgreen rounded-md text-center font-medium'>Paid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightyellow text-shedanormalyellow rounded-md text-center font-medium'>Outlier</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedalightred to-shedalightred2 text-shedanewred rounded-md text-center font-medium'>Unpaid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightblue text-shedanormalblue rounded-md text-center font-medium'>Student</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedamuchlightgreen to-shedamuchlightgreen2 text-shedalightgreen rounded-md text-center font-medium'>Paid</div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/studentview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/studentview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray px-1'><div className='w-3/4 lg:w-1/2 bg-shedalightpurple text-shedanormalpurple rounded-md text-center font-medium'>Graduate</div></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'><div className='w-3/4 lg:w-1/2 bg-gradient-to-r from-shedamuchlightgreen to-shedamuchlightgreen2 text-shedalightgreen rounded-md text-center font-medium'>Paid</div></td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  )
}

export default Students