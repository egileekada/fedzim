import React from 'react'
import HeroImage from '../../assets/images/SecondImage.png'

export default function SecondSection() {
    return (
        <div style={{ borderTopRightRadius : '120px'}} className=' w-full bg-[#F4F4F4] rounded px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-y-12 gapx-x-4 ' > 
            <div className=' w-full flex items-center justify-center' > 
                <img src={HeroImage} className=' w-3/5' alt='hero' />
            </div> 
            <div className='w-full' > 
                <p className='font-PublicSans-Medium text-sm flex items-center' ><div style={{height: '1px'}} className=' w-20 bg-[#230B6D] mr-2 ' />Why Choose Us</p>
                <p className=' font-PublicSans-SemiBold mt-2 text-2xl lg:w-96' >Here is some reason why your company should choose us</p>
                <div className=' grid-cols-1 grid lg:grid-cols-2 gap-8 mt-10 ' >
                    <div className='w-full' >
                        <div style={{ boxShadow: '0px 26px 40px 0px #0000001F' }} className=' p-6 pb-16 rounded-xl bg-white' >
                            <svg width="60" height="60" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="43" cy="43" r="43" fill="#190042" fill-opacity="0.12"/>
                                <path d="M39.9787 23.461L34.2421 34.3206L21.4071 36.0677C19.1055 36.3793 18.183 39.0286 19.8522 40.546L29.138 48.9942L26.9417 60.9283C26.5464 63.0854 28.9798 64.7012 31.018 63.6924L42.5 58.0575L53.982 63.6924C56.0202 64.693 58.4536 63.0854 58.0583 60.9283L55.862 48.9942L65.1478 40.546C66.817 39.0286 65.8945 36.3793 63.5929 36.0677L50.7579 34.3206L45.0213 23.461C43.9935 21.5253 41.0153 21.5007 39.9787 23.461Z" fill="#301A76"/>
                            </svg>
                            <p className=' font-PublicSans-SemiBold mt-6  ' >Do more, Spend Less</p>
                            <p className=' font-PublicSans-Medium leading-loose mt-2 text-xs text-[#575757] ' >Patients Memo On Fedzim helps the health system to keep digital records of all Files whereas </p>
                        </div>
                    </div>
                    <div style={{ boxShadow: '0px 26px 40px 0px #0000001F' }} className=' p-6 rounded-xl mt-14 bg-white' >
                        <svg width="60" height="60" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="43" cy="43" r="43" fill="#190042" fill-opacity="0.12"/>
                            <path d="M36.5858 56.4501L23.5858 44.247C22.8047 43.5138 22.8047 42.3251 23.5858 41.5919L26.4141 38.9369C27.1951 38.2036 28.4615 38.2036 29.2426 38.9369L38 47.1574L56.7574 29.5499C57.5385 28.8167 58.8049 28.8167 59.5859 29.5499L62.4142 32.2049C63.1953 32.9381 63.1953 34.1268 62.4142 34.86L39.4142 56.4502C38.6331 57.1833 37.3668 57.1833 36.5858 56.4501Z" fill="#301A76"/>
                        </svg>
                        <p className=' font-PublicSans-SemiBold mt-6  ' >Save time, Do more</p>
                        <p className=' font-PublicSans-Medium leading-loose mt-2 text-xs text-[#575757] ' >Searching for Hospitals files of various patients can be stressful and time consuming.  Patient Memo on Fedzim enhances hospital file coordination, saving you time and stress while allowing you to accomplish more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 