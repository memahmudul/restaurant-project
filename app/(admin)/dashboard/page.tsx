import React from 'react'

export default function page() {
  return (
    <div className='flex col-span-12 space-x-4'>
      <div className='w-3/12 flex flex-col text-center bg-slate-500 rounded-lg shadow-lg p-2 uppercase'>
      <h1 className='text-xl'>Pending Mobile Banking</h1>
      <h1 className='text-6xl'>5</h1>
      </div>
     
      <div className='w-3/12 flex flex-col text-center bg-slate-500 rounded-lg shadow-lg p-2 uppercase'>
      <h1 className='text-xl'>Pending Flexiload</h1>
      <h1 className='text-6xl'>5</h1>
      </div>



      <div className='w-3/12 flex flex-col text-center bg-slate-500 rounded-lg shadow-lg p-2 uppercase'>
      <h1 className='text-xl'>Pending Bank Transfer</h1>
      <h1 className='text-6xl'>5</h1>
      </div>




      <div className='w-3/12 flex flex-col text-center bg-slate-500 rounded-lg shadow-lg p-2 uppercase'>
      <h1 className='text-xl'>Pending Bill Pay</h1>
      <h1 className='text-6xl'>5</h1>
      </div>



    </div>
  )
}
