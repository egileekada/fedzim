import React from 'react'
import Logo from '../../assets/images/footerlogo.png'
import FooterImage from '../../assets/images/footerimage.png'
import Twitter from '../../assets/images/Twitter.png'
import Facebook from '../../assets/images/Facebook.png'
import Instagram from '../../assets/images/Instagram.png'
import ContactSection from './ContactSection'

export default function Footer(props: any) {
    return (
        <div className='relative w-full mt-24'>
            {props.contact && (
                <div className=' w-full lg:px-24 ' >
                    <ContactSection />
                </div>
            )}
            <div className=' lg:absolute lg:bg-transparent bg-[#230B6D] flex flex-col items-center bottom-0 left-0 right-0 z-20' >
                <img src={Logo} className='w-16 mt-14 lg:hidden' alt='logo' />
                <div className=' w-auto grid-cols-2 grid lg:grid-cols-3 my-10 gap-16 text-white ' >
                    <div className='' >
                        <p className=' font-OpenSans-SemiBold ' >Product</p> 
                        <a href='https://patientmemo.com' ><p className=' font-OpenSans-Medium mt-6 text-sm ' >Patient Memo</p></a>
                        {/* <p className=' font-OpenSans-Medium mt-4 text-sm '>Ridora Memo</p>  */}
                    </div>
                    <div className='' >
                        <p className=' font-OpenSans-SemiBold ' >About us</p>
                        <a href='/aboutus' ><p className=' font-OpenSans-Medium mt-6 text-sm ' >Our team</p></a>
                        <a href='/product' ><p className=' font-OpenSans-Medium mt-4 text-sm '>Latest Product</p></a>
                        {/* <p className=' font-OpenSans-Medium mt-4 text-sm '>Partners</p> */}
                    </div>
                    <div className='' >
                        <p className=' font-OpenSans-SemiBold ' >Contact</p> 
                        <a href="mailto:info@fedzim.com"><p className=' font-OpenSans-Medium mt-6 text-sm ' >info@fedzim.com</p></a>
                        <a href="https://wa.me/+2348752914133"><p className=' font-OpenSans-Medium mt-4 text-sm '>+234-875-291-4133</p></a>
                    </div>
                </div>
                <div className=' w-auto grid grid-cols-3 my-10 gap-16 ' >
                    <a href='https://www.facebook.com/fedzim'><img src={Facebook} alt='facebook' /></a>
                    <a href='https://twitter.com/Fed_zim'><img src={Twitter} alt='facebook' /></a>
                    <a href='https://www.instagram.com/fed_zim/'><img src={Instagram} alt='facebook' /></a>
                </div>
                <p className=' font-OpenSans-Regular text-white mt-10 mb-4 text-sm ' >©2022 - Fedzim.com. All right reserved</p>
                <a href='https://www.icowebagency.com'><p className=' font-OpenSans-SemiBold text-white mb-10 text-sm ' >Developed by icoweb</p></a>
            </div>
            <img src={FooterImage} className=' w-full lg:flex hidden' alt='' />
        </div>
    )
} 