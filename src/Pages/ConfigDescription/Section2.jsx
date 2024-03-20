import React from 'react'

const Section2 = () => {
  return (
    <div className='section-2 mx-[13px] md:mx-[30px] lg:mx-[70px] flex flex-col md:flex-row justify-center items-center gap-[50px] md:gap-[100px] xl:gap-[170px] pb-[80px]'>
        <div>
            <p className='text-[90px] font-[600] text-[var(--main-text-color)] text-center'>4</p>
            <p className='text-[30px] mt-[-10px]'>Bedrooms</p>
        </div>
        <div>
            <p className='text-[90px] font-[600] text-[var(--main-text-color)] text-center'>2</p>
            <p className='text-[30px] mt-[-10px]'>Bathrooms</p>
        </div>
        <div>
            <p className='text-[90px] font-[600] text-[var(--main-text-color)] text-center'>4</p>
            <p className='text-[30px] mt-[-10px]'>Balcony</p>
        </div>
    </div>
  )
}

export default Section2