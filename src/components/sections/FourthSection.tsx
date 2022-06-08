import React from 'react'
import Video from '../../assets/images/Video.png'

export default function FourthSection() {
    return (
        <div className='w-full flex flex-col justify-center lg:px-40 px-6 items-center py-10 ' >
            <svg width="62" height="58" viewBox="0 0 62 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.2252 57.602C7.79209 56.2952 16.4184 53.7379 25.3752 50.6961C25.623 51.4847 25.8472 52.217 26.036 52.7915C26.3901 53.8843 27.6763 54.3913 28.7384 53.8618C33.7419 51.372 46.7699 44.5562 54.0392 37.808C54.169 37.6954 54.3342 37.5827 54.4522 37.4701C58.9483 33.1891 61.1904 27.5674 61.1904 21.9458C61.1904 16.3354 58.9483 10.7138 54.464 6.42155C49.9797 2.14055 44.0912 -0.0112099 38.2026 5.54154e-05C32.314 5.59302e-05 26.4255 2.14056 21.9294 6.43282C21.8114 6.54548 21.6934 6.7032 21.5753 6.82712C14.5185 13.7668 7.36726 26.2155 4.75929 30.981C4.20466 31.9949 4.73569 33.2229 5.88037 33.5608C6.49401 33.7411 7.24925 33.9551 8.0753 34.1917C4.88911 42.7537 2.21034 50.9777 0.841453 55.3376C0.416626 56.7346 1.76191 58.0189 3.2252 57.602Z" fill="url(#paint0_linear_40_2677)"/>
                <ellipse cx="37.0538" cy="21.995" rx="9.67779" ry="9.07293" fill="white"/>
                <defs>
                    <linearGradient id="paint0_linear_40_2677" x1="-1.98489" y1="75.5357" x2="79.0443" y2="-15.1071" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#190042"/>
                        <stop offset="1" stop-color="#190042"/>
                    </linearGradient>
                </defs>
            </svg>
            <p style={{ textShadow: '0px 4px 4px 0px #00000040' }} className=' font-PublicSans-SemiBold text-3xl my-2' >Watch how we work</p>
            <img src={Video} className='w-full mt-10'  alt='video' />
        </div>
    )
} 