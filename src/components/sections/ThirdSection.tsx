import React from 'react'
import HeroImage from '../../assets/images/pharmacy.png'

export default function ThirdSection() {
    return (
        <div className=' w-full rounded text-[#190042] px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-y-12 gapx-x-4 ' > 
            <div className='w-full' > 
                <p className='font-PublicSans-Medium text-sm flex items-center' ><div style={{height: '1px'}} className=' lg:w-20 w-10 bg-[#230B6D] mr-2 ' />Our Product- <span className='font-PublicSans-Bold' >PATIENT MEMO</span></p>
                <p className=' font-PublicSans-SemiBold mt-2 text-2xl lg:w-96' >Leading hospital management product for all</p>
                <p className='font-PublicSans-Medium mt-6 text-xs leading-loose w-96 text-[#575757] ' >Keeping detailed information about a patient, their condition, and their treatment to ensure you have all of the information needed to hand at every checkup or consultation with them
                    <br/>Patient Memo works for both the hospital and the Patients </p>
                <div className=' grid-cols-1 grid lg:grid-cols-2 gap-8 mt-10 ' >
                    <div className='w-full' >
                        <div style={{ boxShadow: '0px 26px 40px 0px #0000001F' }} className=' p-6 rounded-xl bg-white' >
                            <svg width="69" height="79" viewBox="0 0 69 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.6497 52.6089C32.365 53.1602 30.8527 55.333 31.1305 57.668C31.4083 60.0023 33.3875 61.7597 35.7381 61.7597C38.0895 61.7597 40.0687 60.0023 40.3465 57.668C40.6243 55.333 39.112 53.1602 36.8266 52.6089V47.187L34.6497 47.1962V52.6089Z" fill="#190042"/>
                                <path d="M44.2531 70.9045C42.439 72.7179 42.4383 75.6588 44.2517 77.473C46.0659 79.2871 49.0068 79.2871 50.8202 77.473C52.6344 75.6588 52.6337 72.7179 50.8188 70.9045C50.2257 70.2816 49.4589 69.8528 48.6177 69.6728V53.9911C48.6184 51.3931 46.5137 49.2856 43.9158 49.2821C42.6806 49.2799 41.6276 48.3863 41.4249 47.1682L39.2295 47.1774C39.4527 49.6002 41.483 51.4555 43.9165 51.459C45.3126 51.4612 46.4429 52.595 46.4407 53.9911V69.6728C45.6201 69.8947 44.8682 70.3177 44.2531 70.9045Z" fill="#190042"/>
                                <path d="M12.8787 52.3968V58.8229C12.3345 59.0447 11.6322 59.3756 11.1128 59.9199H11.122C9.78335 61.2451 9.37658 63.247 10.0909 64.9896C10.8052 66.7322 12.501 67.8717 14.3846 67.8759C16.2682 67.8795 17.9676 66.7463 18.689 65.0066C19.4111 63.2668 19.0114 61.2635 17.6777 59.9333C16.9606 59.2353 16.0443 58.7789 15.0557 58.6259V52.3968C15.0678 50.9427 15.977 49.6479 17.3404 49.1427L22.4654 47.2222H16.191C14.1848 48.1676 12.8979 50.1787 12.8787 52.3968Z" fill="#190042"/>
                                <path d="M53.7964 59.9348C51.9879 61.7476 51.9922 64.6835 53.8063 66.4906C55.6205 68.2983 58.5564 68.292 60.3628 66.4771C62.1684 64.6622 62.1606 61.7263 60.3443 59.9206H60.3628C59.8433 59.3764 59.1403 59.0455 58.5961 58.8237V52.3976C58.5812 50.0335 57.1058 47.9253 54.8905 47.1018L54.8232 47.0806C54.7566 47.0912 54.6857 47.104 54.6191 47.1132L48.7012 47.1387L54.1344 49.1435C55.4979 49.648 56.4071 50.9434 56.4191 52.3976V58.6266C55.4305 58.7797 54.5143 59.2368 53.7964 59.9348Z" fill="#190042"/>
                                <path d="M57.5418 15.2038C57.5432 15.1627 57.5432 15.1195 57.5432 15.0784C57.5425 12.2225 56.0947 9.56155 53.6973 8.0096C51.3 6.45765 48.279 6.22592 45.6733 7.39449C45.2119 7.60212 44.6677 7.46394 44.3608 7.06142C39.6986 0.94433 31.6533 -1.51753 24.3655 0.943622C17.0777 3.40406 12.1717 10.2397 12.1724 17.9314C12.1724 18.0207 12.1724 18.1079 12.1752 18.1951C12.1951 18.7273 11.8266 19.1957 11.3043 19.302C4.90162 20.6094 0.23018 26.1369 0.00837186 32.6686C-0.123438 36.4585 1.30592 40.1371 3.96195 42.8441C6.68388 45.6646 10.4426 47.2463 14.3621 47.2208H16.1919C16.3364 47.1946 16.476 47.1457 16.605 47.0748L22.9567 44.7334C24.313 44.231 25.2144 42.9384 25.2159 41.492V35.567C25.2159 34.966 25.7034 34.4785 26.3044 34.4785C26.906 34.4785 27.3928 34.966 27.3928 35.567V41.492C27.3893 43.8511 25.9231 45.9608 23.7128 46.7878L22.4727 47.2484L30.0453 47.2165C29.8207 48.4127 28.7768 49.2808 27.5594 49.2822C24.9615 49.2858 22.8575 51.3933 22.8575 53.9912V69.673C22.017 69.853 21.2495 70.2818 20.6564 70.9047C18.8458 72.7174 18.8465 75.6548 20.6592 77.4661C22.4713 79.2774 25.4086 79.2774 27.2206 77.4661C29.0327 75.6548 29.0341 72.7174 27.2235 70.9047C26.6084 70.3179 25.8558 69.8948 25.0345 69.673V53.9912C25.033 52.5952 26.1633 51.4614 27.5601 51.4592C29.9816 51.4564 32.0069 49.6174 32.2429 47.2073L30.0531 47.2158C30.0879 47.0635 30.1084 46.9076 30.1141 46.7509V24.6821C30.1141 24.0811 30.6016 23.5936 31.2026 23.5936C31.8042 23.5936 32.2911 24.0811 32.2911 24.6821V46.7509C32.2911 46.9047 32.2684 47.0564 32.2542 47.2073L34.6495 47.1967V15.612C34.6495 15.0111 35.137 14.5235 35.7379 14.5235C36.3396 14.5235 36.8264 15.0111 36.8264 15.612V47.1875L39.2203 47.1775C39.2075 47.0365 39.1848 46.8948 39.1848 46.7509V24.6821C39.1848 24.0811 39.6724 23.5936 40.2733 23.5936C40.875 23.5936 41.3618 24.0811 41.3618 24.6821V46.7509C41.3682 46.8913 41.3852 47.0301 41.4143 47.1676L48.6942 47.1372L47.7595 46.7878C45.5507 45.9608 44.0859 43.8504 44.083 41.492V35.567C44.083 34.966 44.5706 34.4785 45.1715 34.4785C45.7732 34.4785 46.26 34.966 46.26 35.567V41.492C46.2614 42.9412 47.1621 44.2381 48.5192 44.7462L54.817 47.0798C62.6179 45.88 68.5117 39.179 68.5755 31.3774C68.6116 24.6792 64.4972 18.6578 58.2433 16.2576C57.8082 16.0925 57.5269 15.6687 57.5418 15.2038Z" fill="#190042"/>
                            </svg>
                            <p className=' font-PublicSans-SemiBold mt-6  ' >For the Patient</p>
                            <p className=' font-PublicSans-Medium leading-loose mt-2 text-xs text-[#575757] ' >Patients Memo helps Patients to keep records of:
                                <br/>X-rays and scans
                                <br/>Test results
                                <br/>Notes from the doctor to the patient 
                                <br/>Records of any surgery or hospital visit and next visit</p>
                        </div>
                    </div>
                    <div style={{ boxShadow: '0px 26px 40px 0px #0000001F' }} className=' p-6 rounded-xl mt-14 bg-white' >
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 40.0002H30V70.0002H0V40.0002Z" fill="#190042"/>
                            <path d="M70.0001 21.2131L48.787 0L30 18.7869V0H0V30H30V21.2131L48.787 40.0001H40.0001V70.0001H70.0001V40.0001H51.2132L70.0001 21.2131Z" fill="#190042"/>
                        </svg>
                        <p className=' font-PublicSans-SemiBold mt-6  ' >For the Hospital</p>
                        <p className=' font-PublicSans-Medium leading-loose mt-2 text-xs text-[#575757] ' >Patients' Memo helps the hospital manage:
                            <br/>Patient's name and the date for each new entry
                            <br/>Any relevant clinical findings you have made
                            <br/>The decisions you have taken as a result of those findings and any action.
                            <br/>An outline of any information you have passed on to your patient
                            <br/>Details of any drugs prescribed
                            <br/>Details of any further investigation to be carried out or any treatment required.</p>
                    </div>
                </div>
            </div>
            <div className=' w-full rounded-xl pl-4 ' > 
                <img style={{ boxShadow: '0px 26px 40px 0px #0000001F' }} src={HeroImage} className=' w-full rounded-xl p-2' alt='hero' />
            </div>
        </div>
    )
} 