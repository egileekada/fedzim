import React from 'react'
import HeroImage from '../../assets/images/heroimage.png'
import Spotify from '../../assets/images/spotify.png'
import logitech from '../../assets/images/logitech.png'
import google from '../../assets/images/google.png'
import monnify from '../../assets/images/monnify.png' 
import paystack from '../../assets/images/paystack.png'
import investa from '../../assets/images/investa.png'
import flutterwave from '../../assets/images/flutterwave.png'

export default function HeroSection() {
    return (
        <div className='w-screen text-[#230B6D] overflow-x-hidden px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-y-12 gapx-x-4 ' >
           <div className='w-full py-4' >
                <p className='font-PublicSans-Medium text-sm flex items-center' ><div style={{height: '1px'}} className=' w-20 bg-[#230B6D] ' />Your healthcare solutions partner</p>
                <p className=' font-OpenSans-ExtraBold text-4xl lg:text-5xl leading-snug my-2' >Enabling Digital Revolution For your Businesses</p>
                <p className='font-PublicSans-Medium text-sm mt-5'>We make medical care more accessible to you</p>
                <div className=' w-full flex items-center mt-14' >
                    <button className='flex items-center text-sm bg-[#E834D5] text-white rounded h-10 font-PublicSans-Bold px-6 ' >GET STARTED
                        <svg className='ml-3' width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.725 5.7579C23.7247 5.75758 23.7245 5.75722 23.7242 5.7569L18.8256 0.305287C18.4586 -0.103112 17.865 -0.101593 17.4997 0.308851C17.1344 0.719243 17.1359 1.38303 17.5028 1.79148L20.7918 5.45161H0.9375C0.419719 5.45161 0 5.92098 0 6.5C0 7.07902 0.419719 7.54839 0.9375 7.54839H20.7917L17.5029 11.2085C17.1359 11.617 17.1345 12.2808 17.4997 12.6911C17.865 13.1016 18.4587 13.1031 18.8256 12.6947L23.7242 7.2431C23.7245 7.24278 23.7247 7.24242 23.7251 7.2421C24.0922 6.83229 24.0911 6.16635 23.725 5.7579Z" fill="white"/>
                        </svg>
                    </button>
                    <svg className=' cursor-pointer ' width="182" height="40" viewBox="0 0 232 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="-1" width="64" height="64" rx="32" transform="matrix(1 0 0 -1 12 76)" stroke="#190042" stroke-width="2"/>
                        <rect x="1" y="-1" width="88" height="88" rx="44" transform="matrix(1 0 0 -1 0 88)" stroke="#190042" stroke-opacity="0.24" stroke-width="2"/>
                        <path d="M39.9595 45.0476L39.9595 55.4594C39.9595 57.1335 42.2365 57.9719 43.5683 56.7881L55.2815 46.3763C56.1071 45.6425 56.1071 44.4527 55.2815 43.7189L43.5683 33.3071C42.2365 32.1233 39.9595 32.9617 39.9595 34.6358L39.9595 45.0476Z" fill="#190042"/>
                        <path d="M129.774 44.411H124.077V50H121.458V36.986H124.077V42.206H129.774V36.986H132.402V50H129.774V44.411ZM138.726 50.18C137.814 50.18 137.019 49.985 136.341 49.595C135.669 49.205 135.147 48.653 134.775 47.939C134.409 47.225 134.226 46.379 134.226 45.401C134.226 44.423 134.409 43.568 134.775 42.836C135.147 42.104 135.669 41.534 136.341 41.126C137.019 40.718 137.817 40.514 138.735 40.514C139.653 40.514 140.448 40.715 141.12 41.117C141.792 41.513 142.311 42.077 142.677 42.809C143.043 43.541 143.226 44.405 143.226 45.401C143.226 46.337 143.046 47.165 142.686 47.885C142.332 48.599 141.819 49.16 141.147 49.568C140.481 49.976 139.674 50.18 138.726 50.18ZM138.735 48.227C139.197 48.227 139.569 48.092 139.851 47.822C140.133 47.552 140.337 47.198 140.463 46.76C140.595 46.316 140.661 45.833 140.661 45.311C140.661 44.819 140.601 44.354 140.481 43.916C140.367 43.478 140.169 43.124 139.887 42.854C139.605 42.584 139.221 42.449 138.735 42.449C138.273 42.449 137.898 42.578 137.61 42.836C137.328 43.088 137.121 43.433 136.989 43.871C136.857 44.303 136.791 44.783 136.791 45.311C136.791 45.797 136.851 46.265 136.971 46.715C137.091 47.159 137.292 47.522 137.574 47.804C137.856 48.086 138.243 48.227 138.735 48.227ZM157.426 40.694L154.366 50H152.278L150.541 44.366L148.813 50H146.779L143.764 40.694H146.086L147.868 46.463H147.94L149.65 40.694H151.522L153.25 46.463H153.322L155.05 40.694H157.426ZM175.303 40.694L172.243 50H170.155L168.418 44.366L166.69 50H164.656L161.641 40.694H163.963L165.745 46.463H165.817L167.527 40.694H169.399L171.127 46.463H171.199L172.927 40.694H175.303ZM178.48 45.95C178.474 46.424 178.549 46.838 178.705 47.192C178.861 47.54 179.086 47.81 179.38 48.002C179.68 48.188 180.04 48.281 180.46 48.281C180.91 48.281 181.303 48.185 181.639 47.993C181.981 47.801 182.218 47.486 182.35 47.048H184.717C184.615 47.708 184.351 48.272 183.925 48.74C183.505 49.208 182.995 49.565 182.395 49.811C181.795 50.057 181.171 50.18 180.523 50.18C179.605 50.18 178.795 49.988 178.093 49.604C177.397 49.214 176.854 48.665 176.464 47.957C176.074 47.249 175.879 46.415 175.879 45.455C175.879 44.525 176.056 43.688 176.41 42.944C176.764 42.194 177.277 41.603 177.949 41.171C178.627 40.733 179.44 40.514 180.388 40.514C181.336 40.514 182.131 40.715 182.773 41.117C183.421 41.513 183.907 42.068 184.231 42.782C184.561 43.49 184.726 44.309 184.726 45.239V45.95H178.48ZM178.471 44.384H182.269C182.269 44.012 182.2 43.67 182.062 43.358C181.924 43.046 181.714 42.8 181.432 42.62C181.156 42.44 180.808 42.35 180.388 42.35C179.98 42.35 179.632 42.449 179.344 42.647C179.062 42.839 178.846 43.091 178.696 43.403C178.546 43.715 178.471 44.042 178.471 44.384ZM203.094 40.694L200.034 50H197.946L196.209 44.366L194.481 50H192.447L189.432 40.694H191.754L193.536 46.463H193.608L195.318 40.694H197.19L198.918 46.463H198.99L200.718 40.694H203.094ZM208.107 50.18C207.195 50.18 206.4 49.985 205.722 49.595C205.05 49.205 204.528 48.653 204.156 47.939C203.79 47.225 203.607 46.379 203.607 45.401C203.607 44.423 203.79 43.568 204.156 42.836C204.528 42.104 205.05 41.534 205.722 41.126C206.4 40.718 207.198 40.514 208.116 40.514C209.034 40.514 209.829 40.715 210.501 41.117C211.173 41.513 211.692 42.077 212.058 42.809C212.424 43.541 212.607 44.405 212.607 45.401C212.607 46.337 212.427 47.165 212.067 47.885C211.713 48.599 211.2 49.16 210.528 49.568C209.862 49.976 209.055 50.18 208.107 50.18ZM208.116 48.227C208.578 48.227 208.95 48.092 209.232 47.822C209.514 47.552 209.718 47.198 209.844 46.76C209.976 46.316 210.042 45.833 210.042 45.311C210.042 44.819 209.982 44.354 209.862 43.916C209.748 43.478 209.55 43.124 209.268 42.854C208.986 42.584 208.602 42.449 208.116 42.449C207.654 42.449 207.279 42.578 206.991 42.836C206.709 43.088 206.502 43.433 206.37 43.871C206.238 44.303 206.172 44.783 206.172 45.311C206.172 45.797 206.232 46.265 206.352 46.715C206.472 47.159 206.673 47.522 206.955 47.804C207.237 48.086 207.624 48.227 208.116 48.227ZM214.359 50V40.694H216.888V42.899C217.038 42.425 217.248 42.011 217.518 41.657C217.794 41.297 218.127 41.018 218.517 40.82C218.907 40.616 219.348 40.514 219.84 40.514C219.924 40.514 220.002 40.52 220.074 40.532C220.152 40.538 220.209 40.55 220.245 40.568V43.07C220.191 43.046 220.125 43.031 220.047 43.025C219.975 43.019 219.909 43.013 219.849 43.007C219.333 42.965 218.892 42.98 218.526 43.052C218.16 43.124 217.863 43.247 217.635 43.421C217.407 43.595 217.242 43.808 217.14 44.06C217.038 44.312 216.987 44.594 216.987 44.906V50H214.359ZM230.663 50H228.044L225.533 45.986L224.3 47.3V50H221.672V36.626H224.3V44.555L227.72 40.694H230.546L227.162 44.402L230.663 50Z" fill="#575757"/>
                        <path d="M120 53.96H231.005V55.22H120V53.96Z" fill="#575757"/>
                    </svg>
                </div>
            </div> 
            <div className=' w-full flex items-center justify-center' > 
                <img src={HeroImage} className=' w-3/5' alt='hero' />
            </div>
            <div className='w-full' > 
                <p className='font-PublicSans-Medium text-sm flex items-center' ><div style={{height: '1px'}} className=' w-20 bg-[#230B6D] mr-3 ' />Our Clients</p>
                <p className=' font-PublicSans-SemiBold text-2xl w-80 mt-3' >We make medical care more accessible to you</p>
                <p className=' font-PublicSans-Medium text-xs mt-4 w-72 text-[#575757] ' >At Fedzim, this is the creative team that comes up with new ideas. To your business, we offer the best.</p>
            </div>
            <div className=' w-full flex justify-center items-center flex-col ' >
                <div className=' grid grid-cols-2 lg:grid-cols-3 gap-6' >
                    <div className=' w-full lg:w-32 flex justify-center items-center py-3' style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)'}} >
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
            </div>
        </div>
    )
} 