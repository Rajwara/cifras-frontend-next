import React from 'react'

const Clients = () => {
  return (
    <div className='flex w-full flex-col lg:flex-row justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
    <div className='left lg:w-[10%] xl:w-16 flex flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-2xl leading-9'>Clients</h2>
    </div>

    <div className='middle lg:w-[80%] xl:w-[100%] flex flex-col lg:flex-row gap-6 justify-center'>
      {/* <Numberofvendors/>
      <Totalrevenuecardforotherpage/> */}
    </div>

    <div className='right lg:w-[20%] xl:w-[17%] mt-6 lg:mt-0  items-center justify-center flex'>
      <a href='/vendorform'>
          <button className='flex py-[10px] px-[16px] bg-[#634af9] text-sm font-lexend text-white rounded items-center gap-2'>
          {/* <img src={Plus} className='w-3.5 h-3.5 ' alt=''/> */}
          Add Clients
          </button>
      </a>
    </div>
  </div>  
  )
}

export default Clients