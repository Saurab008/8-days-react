import React from 'react'
import { GoX } from "react-icons/go";

function Modal({ LoginShow, setLoginShow,RegisterShow, setRegisterShow, children }) {
    return (
        <div className="relative">
            <div className={`rounded-lg w-fit h-fit p-10 bg-white shadow-xl shadow-gray-300 ${LoginShow ? "translate-y-0" : "-translate-y-[500px]"} transation-all duration-700 delay-75 ease-in-out fixed top-10 left-0 z-50 right-0 mx-auto`}>
                <div>
                    {children}
                </div>
                <div onClick={() => { setLoginShow(false) }} className='absolute -top-3 -right-5 flex items-center justify-center rounded-full bg-red-500 h-10 w-10'><GoX /></div>
            </div>

            
        </div>
    )
}
export default Modal 