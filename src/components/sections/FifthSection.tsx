import React from 'react'
import HeroImage from '../../assets/images/FifthImage.png'

export default function FifthSection() {

    const [tab, setTab] = React.useState(0)
    
    const BackHandler =()=> {
        if(tab !== 0){
            setTab(tab-1)
        }
    }

    const NextHandler =()=> {
        if(tab !== 2){
            setTab(tab+1)
        }
    }

    return (
        <div className=' w-full flex flex-col justify-center items-center py-10 ' >
            <p className=' font-PublicSans-SemiBold text-3xl my-2 mt-8' >What Client Says</p>
            <p className=' font-PublicSans-Medium w-80 text-center text-[#666666] text-xs my-4' >Listen to what our client have to say about us and how we are serving them better</p>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-20 gap-6' > 
                <div className=' w-full ' > 
                    <img src={HeroImage} className=' w-full lg:w-3/4' alt='hero' />
                </div>
                <div className=' border-b w-full flex flex-col justify-center' >
                    {tab === 0 && ( 
                        <p className=' font-PublicSans-Medium text-xl leading-loose ' >Fedzim delivers a very simple and user-friendly experience. They provide exceptional results for our facility and patients. This has been an enriching experience that will not be forgotten</p>
                    )}
                    {tab === 1 && ( 
                        <p className=' font-PublicSans-Medium text-xl leading-loose ' >First</p>
                    )}
                    {tab === 2 && ( 
                        <p className=' font-PublicSans-Medium text-xl leading-loose ' >Second</p>
                    )}
                    <div className='flex mt-6 ' >
                        <button onClick={()=> BackHandler()}>
                            <svg width="50" height="50" className='cursor-pointer' viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="-0.5" y="0.5" width="79" height="79" rx="3.5" transform="matrix(-1 0 0 1 79 0)" stroke="#230B6D"/>
                                <path d="M44.7071 30.2929C44.3466 29.9324 43.7794 29.9047 43.3871 30.2097L43.2929 30.2929L34.2929 39.2929C33.9324 39.6534 33.9047 40.2206 34.2097 40.6129L34.2929 40.7071L43.2929 49.7071C43.6834 50.0976 44.3166 50.0976 44.7071 49.7071C45.0676 49.3466 45.0953 48.7794 44.7903 48.3871L44.7071 48.2929L36.415 40L44.7071 31.7071C45.0676 31.3466 45.0953 30.7794 44.7903 30.3871L44.7071 30.2929Z" fill="#230B6D"/>
                            </svg>
                        </button>
                        <button onClick={()=> NextHandler()}>
                            <svg width="50" height="50" className='cursor-pointer ml-8' viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="79" height="79" rx="3.5" stroke="#230B6D"/>
                                <path d="M35.2929 30.2929C35.6534 29.9324 36.2206 29.9047 36.6129 30.2097L36.7071 30.2929L45.7071 39.2929C46.0676 39.6534 46.0953 40.2206 45.7903 40.6129L45.7071 40.7071L36.7071 49.7071C36.3166 50.0976 35.6834 50.0976 35.2929 49.7071C34.9324 49.3466 34.9047 48.7794 35.2097 48.3871L35.2929 48.2929L43.585 40L35.2929 31.7071C34.9324 31.3466 34.9047 30.7794 35.2097 30.3871L35.2929 30.2929Z" fill="#230B6D"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 