import React from 'react'

const AcademyStudentPaymentInfo = () => {
  return (
    <div className='w-full'>
        <div className='flex rounded-lg w-full'>
            <div className='flex flex-col justify-between w-[55%]'>
                <p className='font-medium'>Payment</p>
                <div className='flex flex-col'>
                    <p className='font-bold text-[2.5rem]'>N60K</p>
                    <div className='flex justify-between text-shedagray font-semibold'>
                        <p>First Installment - January to February</p>
                        <p>Payment due by May 20</p>
                    </div>
                    
                </div>
            </div>
            <div className='flex flex-col flex-grow justify-between'>
                <div className='flex justify-end'>
                    <p>Type: Installment</p>
                </div>
                <div className='flex justify-end gap-2'>
                    <button className='text-shedared px-10 py-1 border-2 border-shedared rounded-lg'>Receipt</button>
                    <button className='text-shedagray px-10 py-1 border-2 rounded-lg' disabled={true}>Paid</button>
                </div>
            </div>
        </div>
        <div className='w-full bg-shedagray opacity-15 h-[1px] my-5'></div>

        <div className='flex rounded-lg w-full'>
            <div className='flex flex-col justify-between w-[55%]'>
                <p className='font-medium'>Payment</p>
                <div className='flex flex-col'>
                    <p className='font-bold text-[2.5rem]'>N60K</p>
                    <div className='flex justify-between text-shedagray font-semibold'>
                        <p>First Installment - January to February</p>
                        <p>Payment due by May 20</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-grow justify-between'>
                <div className='flex justify-end'>
                    <p>Type: Installment</p>
                </div>
                <div className='flex justify-end gap-2'>
                    <button className='text-shedagray px-10 py-1 border-2 border-shedagray rounded-lg'>Receipt</button>
                    <button className='text-white bg-shedared px-6 py-1 rounded-lg'>Pay Now</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default AcademyStudentPaymentInfo