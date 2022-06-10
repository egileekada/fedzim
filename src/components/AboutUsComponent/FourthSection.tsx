import React from 'react'
import CEO from '../../assets/images/ceo.png'
import Partner from '../../assets/images/partner.png'
import Partner1 from '../../assets/images/partner1.png'
import Spotify from '../../assets/images/spotify.png'
import logitech from '../../assets/images/logitech.png'
import google from '../../assets/images/google.png'
import monnify from '../../assets/images/monnify.png' 
import paystack from '../../assets/images/paystack.png'
import investa from '../../assets/images/investa.png'
import flutterwave from '../../assets/images/flutterwave.png'

export default function FourthSection() {

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
        <div className=' w-full flex flex-col justify-center items-center lg:py-10 ' >
            <p className=' font-PublicSans-SemiBold text-4xl my-2 mt-8' >Meet our Team</p>
            <p className=' font-PublicSans-Medium lg:w-80 text-center text-[#666666] text-xs my-4' >Listen to what our client have to say about us and how we are serving them better</p>
            <div className='w-full text-[#190042] overflow-x-hidden px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-y-12 gapx-x-4 ' >
            <div className='w-full py-4 flex justify-center  flex-col ' > 
                    <p className=' font-OpenSans-SemiBold lg:w-80 text-xl leading-snug my-2' >Finding hospital managemt solution is not easy these days.</p>
                    <p className='font-PublicSans-Medium lg:w-80 leading-loose text-sm mt-5'>The world will be a better place if we keep records and pay close attention to our physical and environmental health. </p>
                    <div className=' w-full flex pl-8 items-center mt-14' >
                        {tab === 0 && (
                            <div className='w-56' >
                                <p className='font-PublicSans-SemiBold'>Chimezirim Wilfred ekeke</p>
                                <p className='font-PublicSans-Medium text-[#00000080] text-xs mt-1'>CEO Fedzim</p>
                            </div>
                        )}
                        {tab === 1 && (
                            <div className='w-56'>
                                <p className='font-PublicSans-SemiBold'>Obomhense Idemudia</p>
                                <p className='font-PublicSans-Medium text-[#00000080] text-xs mt-1'>COO Fedzim</p>
                            </div>
                        )}
                        {tab === 2 && (
                            <div className='w-56'>
                                <p className='font-PublicSans-SemiBold'>Abiodun Osagie Olise</p>
                                <p className='font-PublicSans-Medium text-[#00000080] text-xs mt-1'>CTO Fedzim</p>
                            </div>
                        )}
                        <button onClick={()=> BackHandler()}>
                            <svg className='ml-6 cursor-pointer' width="21" height="10" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.274981 5.7579C0.275261 5.75758 0.275496 5.75722 0.275824 5.7569L5.17445 0.305287C5.54143 -0.103112 6.13501 -0.101593 6.50031 0.308851C6.86555 0.719243 6.86415 1.38303 6.49716 1.79148L3.20823 5.45161H23.0625C23.5803 5.45161 24 5.92098 24 6.5C24 7.07902 23.5803 7.54839 23.0625 7.54839H3.20827L6.49712 11.2085C6.8641 11.617 6.86551 12.2808 6.50026 12.6911C6.13496 13.1016 5.54134 13.1031 5.1744 12.6947L0.275776 7.2431C0.275496 7.24278 0.275261 7.24242 0.274933 7.2421C-0.0922394 6.83229 -0.0910664 6.16635 0.274981 5.7579Z" fill={tab === 0 ? "#C4C4C4" : "#434343"}/>
                            </svg>
                        </button>
                        <button  onClick={()=> NextHandler()} >
                            <svg className=' ml-3 cursor-pointer' width="21" height="10" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.725 5.7579C23.7247 5.75758 23.7245 5.75722 23.7242 5.7569L18.8256 0.305287C18.4586 -0.103112 17.865 -0.101593 17.4997 0.308851C17.1344 0.719243 17.1359 1.38303 17.5028 1.79148L20.7918 5.45161H0.9375C0.419719 5.45161 0 5.92098 0 6.5C0 7.07902 0.419719 7.54839 0.9375 7.54839H20.7917L17.5029 11.2085C17.1359 11.617 17.1345 12.2808 17.4997 12.6911C17.865 13.1016 18.4587 13.1031 18.8256 12.6947L23.7242 7.2431C23.7245 7.24278 23.7247 7.24242 23.7251 7.2421C24.0922 6.83229 24.0911 6.16635 23.725 5.7579Z" fill={tab === 2 ? "#C4C4C4" : "#434343"}/>
                            </svg> 
                        </button>
                    </div>
                </div> 
                <div className=' w-full flex items-center justify-center' > 
                    {tab === 0  && (
                        <img src={CEO} className=' w-full px-6 lg:w-3/5' alt='hero' />
                    )}
                    {tab === 1  && (
                        <img src={Partner1} className=' w-full px-6 lg:w-3/5' alt='hero' />
                    )}
                    {tab === 2  && (
                        <img src={Partner} className=' w-full px-6 lg:w-3/5' alt='hero' />
                    )}
                </div>
                <div className='w-full' > 
                    <p className='font-PublicSans-Medium text-sm flex items-center' ><div style={{height: '1px'}} className=' w-20 bg-[#230B6D] mr-3 ' />Our Clients</p>
                    <p className=' font-PublicSans-SemiBold text-2xl lg:w-96 mt-3' >Leading digital transformation for all industry.</p>
                    <p className=' font-PublicSans-Medium text-xs mt-4 lg:w-96 text-[#575757] ' >At Fedzim, this is the creative team that comes up with new ideas. To your business, we offer the best.</p>
                </div>
                {/* <div className=' w-full flex justify-center items-center flex-col ' >
                    <div className=' grid grid-cols-2 lg:grid-cols-3 gap-6' >
                        <div className=' w-32 flex justify-center items-center py-3' style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)'}} >
                            <img className='w-20 opacity-50 ' src={Spotify} alt='spotify' />
                        </div>
                        <div className=' w-32 flex justify-center items-center py-3' style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)'}} >
                            <img className='w-20 opacity-50 ' src={logitech} alt='logitech' />
                        </div>
                        <div className=' w-32 flex justify-center items-center py-3' style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)'}} >
                            <img className='w-20 ' src={google} alt='google' />
                        </div>
                    </div>
                    <div className='mx-auto grid grid-cols-2 gap-6 mt-6' > 
                        <div className=' w-32 flex justify-center items-center py-3' style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)'}} >
                            <img className='w-20' src={monnify} alt='monnify' />
                        </div>
                        <div className=' w-32 flex justify-center items-center py-3' style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)'}} >
                            <img className='w-20 ' src={investa} alt='investa' />
                        </div>
                    </div>
                    <div className=' grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6' >
                        <div className=' w-32 flex justify-center items-center py-3' style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)'}} >
                            <img className='w-20' src={paystack} alt='spotify' />
                        </div>
                        <div className=' w-32 flex justify-center items-center py-3' style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)'}} >
                            <img className='w-20 ' src={flutterwave} alt='logitech' />
                        </div>
                        <div className=' w-32 flex bg-[#1900421F] justify-center items-center py-3' style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)'}} >
                            <p className=' font-OpenSans-SemiBold text-sm text-[#230B6D] ' >120+ company</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
} 