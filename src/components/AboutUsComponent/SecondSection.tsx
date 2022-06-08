import React from 'react'

export default function SecondSection() {
    return (
        <div className=' bg-[#F5F6F8] w-full flex lg:flex-row flex-col py-14 py p-6 lg:p-14' >
            <div className=' w-full flex flex-col lg:flex-row lg:mr-12' >
                <svg className='lg:w-20 lg:h-20 w-12 h-12 lg:-mt-8' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.1" width="48" height="48" rx="24" fill="#190042"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6923 13H33.3077C34.2423 13 35 13.8012 35 14.7895V28.2105C35 29.1988 34.2423 30 33.3077 30H25V33H28V35H20V33H23V30H14.6923C13.7577 30 13 29.1988 13 28.2105V14.7895C13 13.8012 13.7577 13 14.6923 13ZM33.3077 14.7895H14.6923V28.2105H33.3077V14.7895Z" fill="#190042"/>
                </svg>
                <div className=' lg:ml-4 mt-2' >
                    <p className=' font-PublicSans-SemiBold' >Web Development</p>
                    <p className=' font-PublicSans-Regular text-sm mt-2' >Fedzim identifies problems in every industry and proposes solutions for it through web development</p>
                </div>
            </div>
            <div className=' w-full flex lg:mt-0 mt-10 flex-col lg:flex-row lg:ml-12' >
                <div className='relative lg:w-20 lg:h-20 w-12 h-12 flex justify-center lg:-mt-8 items-center' >
                    <svg className=' absolute' width="18" height="20" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0H19C20.6569 0 22 1.34315 22 3V21C22 22.6569 20.6569 24 19 24H3C1.34315 24 0 22.6569 0 21V3C0 1.34315 1.34315 0 3 0ZM19 2H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H19C19.5523 22 20 21.5523 20 21V3C20 2.44772 19.5523 2 19 2ZM14 14.5C14.5523 14.5 15 14.9477 15 15.5C15 16.0128 14.614 16.4355 14.1166 16.4933L14 16.5H6C5.44772 16.5 5 16.0523 5 15.5C5 14.9872 5.38604 14.5645 5.88338 14.5067L6 14.5H14ZM17 8.5C17 7.94772 16.5523 7.5 16 7.5H6L5.88338 7.50673C5.38604 7.56449 5 7.98716 5 8.5C5 9.05228 5.44772 9.5 6 9.5H16L16.1166 9.49327C16.614 9.43551 17 9.01284 17 8.5Z" fill="#E834D5"/>
                    </svg>
                    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.1" width="48" height="48" rx="24" fill="#E834D5"/>
                    </svg>
                </div>
                <div className=' lg:ml-4 mt-2' >
                    <p className=' font-PublicSans-SemiBold' >UI/UX Design</p>
                    <p className=' font-PublicSans-Regular text-sm mt-2' >Fedzim identifies problems in every industry and proposes solutions for it through UI/UX Design</p>
                </div>
            </div>
        </div>
    )
} 