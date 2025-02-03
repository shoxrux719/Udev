import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import React from 'react'
import { Outlet, Navigate, NavLink, Link } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className='container '>
            <nav className='flex justify-between bg-[#] items-center pt-[24px]  container mx-auto sticky '>
                <ul className='flex items-center gap-2'>
                   
                        <Link to="/" className="cursor-pointer">
                            
                              <img className="w-[50px] h-[50px]" src="/public/assets/images/Logo.png" alt="" />
                        </Link>
                        <li className='w-[100px] h-[42px] bg-white text-center flex items-center justify-center rounded-3xl'>
                            Home
                        </li>
                        <li className='w-[107px] h-[42px] bg-[#0F0F11] border-white border-[2px] text-white flex items-center justify-center rounded-3xl hover:bg-white hover:text-black'>
                            Kurslar
                        </li>
                        <li className='w-[167px] h-[42px] bg-[#0F0F11] border-white border-[2px] text-white flex gap-5  items-center justify-center rounded-3xl hover:bg-white hover:text-black'>
                            Ekskursiya
                            <img src="/public/assets/images/Dropdown Icon.png" alt="" />
                        </li>
                        <li className='w-[100px] h-[42px] bg-[#0F0F11] border-white border-[2px] text-white flex items-center justify-center rounded-3xl hover:bg-white hover:text-black'>
                            Aloqa
                        </li>

                </ul>
                <div className="flex gap-8 items-center">
                    <Select>
                        <SelectTrigger className="w-[70px] h-[42px]  flex items-center justify-between rounded-full bg-white px-4 shadow-md">
                            <SelectValue className="text-black" placeholder="EN" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="uz">O‘Z</SelectItem>
                            <SelectItem value="en">En</SelectItem>
                            <SelectItem value="ru">Ру</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button className="flex gap-5 font-semibold bg-white text-black rounded-3xl w-[242px] h-[42px] hover:bg-black hover:text-white hover:border-white border-[2px] ">
                        Biz bilan boglanish
                        <div className="svg-container">
                            <svg
                                className="Svg_icon"
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.3724 10.6923C6.77587 10.6923 7.10295 10.3824 7.10295 10C7.10295 9.61765 6.77587 9.30769 6.3724 9.30769C5.96892 9.30769 5.64184 9.61765 5.64184 10C5.64184 10.3824 5.96892 10.6923 6.3724 10.6923Z"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M11.121 10.6923C11.5245 10.6923 11.8515 10.3824 11.8515 10C11.8515 9.61765 11.5245 9.30769 11.121 9.30769C10.7175 9.30769 10.3904 9.61765 10.3904 10C10.3904 10.3824 10.7175 10.6923 11.121 10.6923Z"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.8696 10.6923C16.2731 10.6923 16.6001 10.3824 16.6001 10C16.6001 9.61765 16.2731 9.30769 15.8696 9.30769C15.4661 9.30769 15.139 9.61765 15.139 10C15.139 10.3824 15.4661 10.6923 15.8696 10.6923Z"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M11.4863 1C9.76836 1.00051 8.08276 1.44258 6.60901 2.27913C5.13526 3.11568 3.92854 4.31537 3.11739 5.75044C2.30624 7.18551 1.92103 8.80221 2.00279 10.4283C2.08455 12.0545 2.63022 13.6291 3.58168 14.9846L1.98907 19L7.32212 18.0862C8.60629 18.6808 10.0156 18.9932 11.4448 18.9999C12.8741 19.0066 14.2866 18.7075 15.5769 18.1249C16.8673 17.5423 18.0022 16.6912 18.8971 15.6351C19.792 14.579 20.4238 13.345 20.7455 12.0253C21.0671 10.7056 21.0703 9.33403 20.7547 8.01298C20.4392 6.69192 19.813 5.4554 18.923 4.39558C18.0329 3.33577 16.9019 2.48 15.6143 1.89207C14.3266 1.30413 12.9156 0.999202 11.4863 1Z"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>



                    </Button>
                </div>
            </nav>
            <div className=" ">

                <Outlet />
            </div>
            <footer>
                footer
            </footer>
        </div>

    )
}

export default RootLayout