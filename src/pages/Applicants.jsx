import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import AcademySummary from '../components/AcademySummary'

const Applicants = () => {
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
            <div className='flex gap-4'>
              <p className='text-shedagray text-lg font-small flex-grow'>Applicant is:</p>
              <div className='flex gap-16 px-4 rounded-lg bg-shedapagebg'>
                <div className='flex items-center gap-2'>
                  <input type="radio" name="applicants-status" id="all" className='w-5 h-5' />
                  <label htmlFor="all">All</label>
                </div>
                <div className='flex gap-4'>
                  <div className='flex items-center gap-2'>
                    <input type="radio" name="applicants-status" id="accepted" className='w-5 h-5' />
                    <label htmlFor="all">Accepted</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input type="radio" name="applicants-status" id="rejected" className='w-5 h-5' />
                    <label htmlFor="all">Rejected</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <input type="radio" name="applicants-status" id="awaiting" className='w-5 h-5' />
                    <label htmlFor="all">Awaiting</label>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <button className='bg-shedared rounded-md text-white p-2 text-[80%] 2xl:text-[100%]'>+ Add new student</button>
        </div>

        <div className='w-full'>
          <table className='w-full table-fixed'>
            <thead className='bg-shedapagebg rounded-md h-[3rem]'>
              <tr className=''>
                <th className='lg:w-[3%]'><input type="checkbox" name="" id="" /></th>
                <th className='text-shedagray text-lg font-normal text-start'>Name</th>
                <th className='text-shedagray text-lg font-normal text-start'>Email</th>
                <th className='text-shedagray text-lg font-normal text-start'>Recommended Program</th>
                <th className='text-shedagray text-lg font-normal text-start'>Chosen Program</th>
                <th className='w-[15%] text-shedagray text-lg font-normal text-center'>Action</th>
              </tr>
            </thead>
            <tbody className=''>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/X0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred bg-shedanewred text-white px-0'>Rejected</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue bg-shedanormalblue text-white px-0'>Accepted</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
              <tr className='items-center h-[3rem] border-b-[1px] '>
                <td className='text-center'><input type="checkbox" name="" id="" /></td>
                <td className='text-start font-medium text-shedagray'><div className='flex items-center gap-1'><div className='w-5 h-5 bg-gray-300 rounded-full'></div><div><Link to={'/home/applicantview/X0124794'}>Alex Oladele</Link></div></div></td>
                <td className='text-start font-medium text-shedagray'><Link to={'/home/applicantview/x0124794'}>alexoladele@gmail.com</Link></td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='text-start font-medium text-shedagray'>Frontend Development</td>
                <td className='flex justify-center text-start font-medium text-shedagray w-full'>
                  <div className='flex justify-between w-full xl:w-[70%] text-center font-medium '>
                  <button className='rounded-lg border-[2px] border-shedanormalblue text-shedanormalblue px-2'>Accept</button>
                  <button className='rounded-lg border-[2px] border-shedanewred text-shedanewred px-2'>Reject</button>
                </div></td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  )
}

export default Applicants