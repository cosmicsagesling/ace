/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { BsArrowReturnRight} from 'react-icons/bs'


const AvatarGroup = () => {
  return (
    <Link href='/#testimonials' data-aos="zoom-in" className='z-40 bg-white cursor-pointer flex items-center pr-7 border-t-2 border-t-green-400 drop-shadow-2xl pl-6 ring-1 gap-4 ring-slate-200 rounded-full py-1 max-md:py-2'>
        <div className='relative flex items-center'>
            <div className='w-10 h-10 max-md:size-7 rounded-full overflow-hidden'>
                <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=" alt="testimonial-img2" className='object-cover w-full h-full' />
            </div>
            <div className='absolute right-5 w-10 h-10 max-md:size-7 overflow-hidden rounded-full'>
            <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="testimonial-img" className='object-cover w-full h-full' />

            </div>
        </div>
        <div className='flex items-center gap-3'>
            <p className='max-md:text-sm'>Hear what students say
            </p>
            <BsArrowReturnRight/>

        </div>
    </Link>
  )
}

export default AvatarGroup
