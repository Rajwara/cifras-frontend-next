import React from "react";

const Companydata = () => {
  return (
    <div className='main flex flex-col bg-white mt-20 '>
      <div className='p-8'>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-[#404040] text-2xl font-bold font-lexend leading-9'>
            Company Data
          </h2>
          <p className='text-[#404040] text-sm font-normal font-inter leading-7'>
            Know the information that you have registered in Alegra about your
            company.
          </p>
        </div>
        <div className='upper border border-[#ebebeb] rounded-md mt-10'>
          <div className='border border-[#ebebeb] p-8'>
            <h6 className='font-lexend font-bold text-[#404040] text-lg leading-7'>
              General Data
            </h6>
          </div>
          <div className=' w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='lg:w-[40%] '>
              <div>
                <div className='flex flex-col text-center items-center justify-center w-full'>
                  <label
                    for='dropzone-file'
                    className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 '
                  >
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                      <svg
                        className='w-8 h-8 mb-4 text-gray-500 '
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 16'
                      >
                        <path
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                        />
                      </svg>
                      <p className='mb-2 text-sm text-[#404040] font-inter'>
                        <span className='font-semibold font-lexend text-sm'>Click to upload</span> or
                        drag and drop
                      </p>
                      <p className='text-xs text-[#404040] font-inter '>
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id='dropzone-file' type='file' className='hidden' />
                  </label>
                  <p className='text-[#404040] mt-4 text-sm font-inter font-normal leading-7'>
                    If you need help adding the logo,
                  </p>
                  <a
                    href='#'
                    className='text-[#634AF9] font-medium text-sm  font-inter leading-7'
                  >
                    click here
                  </a>
                </div>
              </div>
            </div>
            <div className='lg:w-[60%] flex flex-col gap-4'>
              <div className='flex flex-row items-center justify-between'>
                <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                  Name
                </h6>
                <p className='font-inter font-normal text-[#404040] text-sm leading-7'>
                  John Doe
                </p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                  ID number
                </h6>
                <p className='font-inter font-normal text-[#c0c0c0] text-sm leading-7'>
                  Not Registered
                </p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                  Address
                </h6>
                <p className='font-inter font-normal text-[#c0c0c0] text-sm leading-7'>
                  Not Registered
                </p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                  City
                </h6>
                <p className='font-inter font-normal text-[#c0c0c0] text-sm leading-7'>
                  Not Registered
                </p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                  Email
                </h6>
                <p className='font-inter font-normal text-[#c0c0c0] text-sm leading-7'>
                  Not Registered
                </p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                  Phone
                </h6>
                <p className='font-inter font-normal text-[#404040] text-sm leading-7'>
                  null
                </p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                  Website
                </h6>
                <p className='font-inter font-normal text-[#c0c0c0] text-sm leading-7'>
                  Not Registered
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='down'>
          <div className='upper border border-[#ebebeb] rounded-md mt-10'>
            <div className='border border-[#ebebeb] p-8'>
              <h6 className='font-lexend font-bold text-[#404040] text-lg leading-7'>
                Basic Settings
              </h6>
            </div>
            <div className=' w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className=' lg:w-[80%] flex flex-col gap-4'>
                <div className='flex flex-row items-center justify-between'>
                  <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                    Currency
                  </h6>
                  <p className='font-inter font-normal text-[#c0c0c0] text-sm leading-7'>
                    Not Selected
                  </p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                  <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                    Sector
                  </h6>
                  <p className='font-inter font-normal text-[#c0c0c0] text-sm leading-7'>
                    Not Selected
                  </p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                  <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                    Employees Number
                  </h6>
                  <p className='font-inter font-normal text-[#c0c0c0] text-sm leading-7'>
                    Not Selected
                  </p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                  <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                    Decimal Precision
                  </h6>
                  <p className='font-inter font-normal text-[#404040] text-sm leading-7'>
                    2
                  </p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                  <h6 className='font-lexend font-semibold text-[#404040] text-base leading-7'>
                    Decimal Separator
                  </h6>
                  <p className='font-inter font-normal text-[#c0c0c0] text-sm leading-7'>
                    ...
                  </p>
                </div>
              </div>
              <div className='w-[20%] '></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companydata;