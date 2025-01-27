import React, { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
import { useNavigate } from "react-router";
import { Typography } from "@material-tailwind/react";
import { Disclosure, DisclosureButton } from '@headlessui/react';

export default function Nav_lec() {
    const { state: ContextState, logout } = useContext(AuthContext);
    const { user } = ContextState;
    const navigate = useNavigate()
    const onLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/")
    };


    return (
        <div as="nav" className="bg-white-100 drop-shadow-md  w-full h-12 fixed z-10">
            <div id="sticky-banner" tabIndex="-1 n" className=" max-w-7xl w-full  mx-auto px-2 sm:px-6 lg:px-8  ">
                <div className=" flex items-center mx-6 h-12 justify-between">
                    <div className="flex inset-y-0 left-0 items-center sm:hidden">
                        <Typography>
                            Hello, Lecturer {user.username}
                        </Typography>
                        <div className="flex ml-3">
                            <button className="flex-initial mx-3 group relative inline-flex items-center justify-center rounded-md p-2 text-indigo-500 hover:text-indigo-700 w-auto h-8 bg-transparent focus:outline-none focus:underline-offset-8 focus:un ">
                                <span>Home</span>
                            </button>
                            <button className="flex-initial group relative inline-flex items-center justify-center rounded-md p-2 text-indigo-500 hover:text-indigo-700 w-auto h-8 bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-blue-700 focus:bg-light-blue-700 focus:text-white-100">
                                <span>User</span>
                            </button>
                        </div>
                    </div>



                    <div className="absolute inset-y-0 flex right-0 items-center pr-2">
                        <button onClick={onLogout} className="items-center  bg-blue-600 text-white-100 hover:bg-light-blue-900 left-0 w-16 rounded-lg">

                            Logout

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}
