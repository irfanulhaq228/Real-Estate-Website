import React from 'react'

const Section12 = () => {
  return (
    <div className='section-12 mx-[13px] md:mx-[30px] lg:mx-[70px] pt-[30px] pb-[130px]'>
        <p className='text-center text-[25px] sm:text-[30px] lg:text-[38px] font-[700]'>
            Do we have everything you're looking for?
        </p>
        <p className='text-[22px] font-[400] lg:w-[600px] text-center'>
            Drop us your contact details, We are always more than happy to help.
        </p>
        <div className='input-box w-[100%] flex flex-col md:flex-row justify-center gap-[30px] lg:gap-[35px] xl:gap-[40px] mt-[40px] px-[20px] md:px-0'>
            <input className='input md:w-[250px] lg:w-[300px]' placeholder='Your Name' />
            <input className='input md:w-[250px] lg:w-[300px]' placeholder='Your Email Address' />
            <button className="button md:w-[250px] lg:w-[300px]">Get in Touch</button>
        </div>
    </div>
  )
}

export default Section12