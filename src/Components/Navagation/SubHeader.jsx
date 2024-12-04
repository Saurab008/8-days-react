import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function SubHeader() {

    const [Active, setActive] = useState(0)
    const location=useLocation();
    console.log(location,"Dsd")
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
            <div className="flex justify-between py-3 px-5 items-center">
                <div className="font-bold text-2xl ">Clever</div>


                <div className="flex gap-44 justify-between items-center">
                    <div className="gap-3 flex items-center">
                        {
                            navitem.map((val, i) => {
                                return (
                                    <Link key={i} to={val.path} className={`text-sm font-medium ${val.path === location.pathname ? "text-primary" : 'text-gray-400'}`}>
                                        <div onClick={()=>{
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
                    <button className="w-fit h-fit uppercase bg-none text-primary px-4 py-3 cursor-pointer">Register</button>
                    <button className="w-fit h-fit uppercase bg-primary bg-opacity-45 text-primary px-7 py-3">Login</button>
                </div>
            </div>
        </div >
    )
}
export default SubHeader;