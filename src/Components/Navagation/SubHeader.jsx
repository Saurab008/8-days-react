import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Modal from "../UI/Modal";
function SubHeader() {

    const [Active, setActive] = useState(0)
    const [LoginShow, setLoginShow] = useState(false)
    const [RegisterShow, setRegisterShow] = useState(false)


    const location = useLocation();
    console.log(location, "Dsd")
    const navitem = [
        {
            title: "Home",
            path: "/"
        }, {
            title: "Pages",
            path: "/page"
        }, {
            title: "Courses",
            path: "/cources"
        }, {
            title: "Instructor",
            path: "/instructor"
        }, {
            title: "Blog",
            path: "/blog"
        }, {
            title: "Contact",
            path: "/contact"
        },

    ]
    return (
        <div className="bg-white">


            <Modal LoginShow={LoginShow} setLoginShow={setLoginShow}>
                <div className="w-96 flex flex-col gap-6">
                    <div className="font-bold text-2xl ">LogIn</div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label>Email</label>
                            <input type="email" className="border outline-none border-gray-300 py-2 px-4 placeholder:capitalize" placeholder="E-Mail" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>PassWord</label>
                            <input type="password" className="border outline-none border-gray-300 py-2 px-4 placeholder:capitalize" placeholder="Password" required />
                        </div>
                    </div>
                    <div>
                        <button className="border border-primary py-2 px-8 text-primary rounded-md group relative shadow-lg">
                            <div className="relative z-10 group-hover:text-white font-semibold">LogIn</div>
                            <div className="h-full absolute top-0 left-0 bg-primary w-0 group-hover:w-full transition-all duration-700 delay-75 ease-in-out"></div>
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal LoginShow={RegisterShow} setLoginShow={setRegisterShow}>
                <div className="w-96 flex flex-col gap-6">
                    <div className="font-bold text-2xl ">Register</div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label>Email</label>
                            <input type="email" className="border outline-none border-gray-300 py-2 px-4 placeholder:capitalize" placeholder="E-Mail" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>PassWord</label>
                            <input type="password" className="border outline-none border-gray-300 py-2 px-4 placeholder:capitalize" placeholder="Password" required />
                        </div>
                    </div>
                    <div>
                        <button className="border border-primary py-2 px-8 text-primary rounded-md group relative shadow-lg">
                            <div className="relative z-10 group-hover:text-white font-semibold">Submit</div>
                            <div className="h-full absolute top-0 left-0 bg-primary w-0 group-hover:w-full transition-all duration-700 delay-75 ease-in-out"></div>
                        </button>
                    </div>
                </div>
            </Modal>

            <div className="flex justify-between py-3 px-5 items-center">
                <div className="font-bold text-2xl ">Clever</div>


                <div className="flex gap-44 justify-between items-center">
                    <div className="gap-3 flex items-center">
                        {
                            navitem.map((val, i) => {
                                return (
                                    <Link key={i} to={val.path} className={`text-sm font-medium ${val.path === location.pathname ? "text-primary" : 'text-gray-400'}`}>
                                        <div onClick={() => {
                                            setActive(i)
                                        }}>

                                            {val.title}
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        {/* <div className="text-sm text-gray-400 font-medium">Home</div> */}
                    </div>

                    <div className="flex gap-4 justify-between items-center">
                        <div className="flex border items-center gap-3 rounded-md px-5">
                            <FaSearch />
                            <input type="search" placeholder="Search" className="outline-none py-1 px-4" />
                        </div>
                    </div>


                </div>
                <div className="font-bold">
                    <button onClick={() => { setRegisterShow(true) }} className="w-fit h-fit uppercase bg-none text-primary px-4 py-3 cursor-pointer">Register</button>
                    <button onClick={() => { setLoginShow(true) }} className="w-fit h-fit uppercase bg-primary bg-opacity-45 text-primary px-7 py-3">Login</button>
                </div>
            </div>
        </div >
    )
}
export default SubHeader;