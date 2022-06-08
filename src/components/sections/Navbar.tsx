import React from 'react'
import Logo from '../../assets/images/logo.png'
import { FiMenu } from 'react-icons/fi'; 
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate()

    const [menu, setMenu] = React.useState(false);
    return (
        <div className='w-full flex items-center px-8 lg:px-24 h-24 text-[#575757] ' >
            <img onClick={()=> navigate('/')} src={Logo} className='w-28 cursor-pointer' alt='logo' />
            <div className=' w-auto items-center lg:flex hidden ml-auto' >
                <a href='/' className=' text-sm mx-4 font-OpenSans-Medium ' >Home</a>
                <a href='/aboutus' className=' text-sm mx-4 font-OpenSans-Medium ' >About us</a>
                <a href='/product' className=' text-sm mx-4 font-OpenSans-Medium ' >Products</a>
                <a href='/contactus' className=' text-sm mx-4 font-OpenSans-Medium ' >Contact</a>
                <button className=' border mx-4 border-[#E834D5] font-OpenSans-SemiBold text-[#E834D5] text-sm h-10 w-24 rounded ' >LET’S TALK</button>
            </div>

            <div className="w-full flex justify-end lg:hidden">

                {!menu
                    ?
                        <button onClick={()=> setMenu(true)} className=" w-auto h-auto text-center font-Heebo-Regular">
                            <FiMenu size={24} color="black" />
                        </button>
                    :
                        <button onClick={()=> setMenu(false)} className="xl:hidden sm:flex sm:justify-end sm:w-auto sm:h-auto text-center font-Heebo-Regular"> 
                            <IoMdClose  size={24} color="black"/>
                        </button>
                } 
            </div>


            {menu 
                ?
                <div className=' w-full h-auto pb-6 top-24 right-0 lef4 z-50 bg-white absolute xl:hidden flex flex-col font-Inter-SemiBold items-center mt-0 mb-4'  > 
                    <a href='/' onClick={()=>setMenu(false)} className=' text-sm font-OpenSans-Medium my-2 ' >Home</a>
                    <a href='/aboutus' onClick={()=>setMenu(false)} className=' text-sm font-OpenSans-Medium my-2 ' >About us</a>
                    <a href='/product' onClick={()=>setMenu(false)} className=' text-sm font-OpenSans-Medium my-2 ' >Products</a>
                    <a href='/contactus' onClick={()=>setMenu(false)} className=' text-sm font-OpenSans-Medium my-2 ' >Contact</a>
                    <button className=' border mx-4 border-[#E834D5] font-OpenSans-SemiBold text-[#E834D5] text-sm h-10 w-24 rounded my-2' >LET’S TALK</button>
                    
                </div>
            :null}
        </div>
    )
} 