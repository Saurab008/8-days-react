import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import SubHeader from './SubHeader';


function Header() {
    return (
        <div>
            <div className='bg-gray-200'>
                <div className='flex justify-between item-center text-sm text-gray-400 uppercase py-2 px-6'>


                    {/* Contact info */}
                    <div className='flex items-center font-semibold gap-8'>
                        <div className='hover:text-gray-600 cursor-pointer'>Phone: <span>+9745427537</span></div>
                        <div className='hover:text-gray-600 cursor-pointer border-x-[1px] border-gray-300 px-3'>E-mail: <span className='lowercase'>info@clever.com</span></div>
                    </div>


                    {/*Social media */}
                    <div className='flex items-center gap-5'>
                        <div className='text-xs'>Follow Us</div>
                        <div className='flex items-center gap-3 '>
                            <div className='flex items-center '>
                                <div className='border-x-[1px] flex justify-center h-full border-gray-300 px-4 hover:text-gray-600 cursor-pointer'> 
                                    <FaTwitter /> 
                                </div>
                                <div className='border-x-[1px] flex justify-center h-full border-gray-300 px-4 hover:text-gray-600 cursor-pointer'> 
                                    <FaFacebookF />
                                </div>
                                <div className='border-x-[1px] flex justify-center h-full border-gray-300 px-4 hover:text-gray-600 cursor-pointer'> 
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='bg-primary'>
                <SubHeader/>
            </div>
        </div>
    )
}

export default Header