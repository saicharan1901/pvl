import React from "react";
import "./dashboard.css"

import { AiOutlineUser, AiOutlineHeart,AiOutlineShareAlt,AiOutlineAccountBook } from "react-icons/ai";


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percentage = 3.8;
const percentage1 = 30.8;

function Dashboard() {
    return (
        <div className="container w-3/4 lg:mx-80 md:mx-4 mt-12 ">
            <div className="grid grid-cols-1 gap-1 mb-6 lg:grid-cols-3 px-1" >
                <div className="shadow-md w-2/3 px-4 py-5 bg-[#F77171] rounded-lg ">
                    <div className=" flex justify-between text-sm font-medium text-gray-100 truncate">
                        Students
                        <AiOutlineUser size={20} />
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-100">
                        26
                    </div>
                </div>
                <div className="shadow-md w-2/3 px-4 py-5 bg-[#3B81F6] rounded-lg ">
                    <div className=" flex justify-between text-sm font-medium text-gray-100 truncate">
                        Departments
                        <AiOutlineShareAlt size={20} />
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-100">
                        5
                    </div>
                </div>
                <div className="shadow-md w-2/3 px-4 py-5 bg-[#21C55D] rounded-lg ">
                    <div className="flex justify-between text-sm font-medium text-gray-100 truncate">
                        Placements
                        <AiOutlineAccountBook size={20} />
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-100">
                        0
                    </div>
                </div>
            </div>
            {/* a div with button on the right */}
            <div className="flex lg:justify-end md:justify-center px-4 mt-12">
                <div className="flex gap-4">
                    <div className="bg-[#F87315] text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Share with Facebook </span>
                        <AiOutlineShareAlt size={20} />

                    </div>
                </div>
            </div>
            <h1 className="my-8 text-xl text-[#21C55D]">Upcoming Placement Opportunities</h1>

            <div className="flex grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2  p-4">
                <div>
                    <div className="mb-20">
                        <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Placement Tests</h2>
                        <h2 className="text-gray-400 text-sm font-bold">No Placement Tests Scheduled</h2>
                    </div>
                    <div className=" shadow-xl rounded  p-4">
                        <h2 className="text-[#f77171] text-sm font-bold"> Placement Exams History</h2>
                        <div className=" my-8  ">
                            <div className="mx-auto " style={{ width: 100, height: 100 }} >
                                <CircularProgressbar className="my-2" value={percentage} text={`${percentage}%`} />
                                <div >26 Students</div>
                            </div>
                        </div>

                        <div className=" flex p-4  justify-evenly ">
                            <div className=" ">
                                <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Total Students Accepted</h2>
                                <div className="bg-[#21C55D] lg:w-2/3  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
                                    <span className="mx-auto">1 </span>

                                </div>
                            </div>
                            <div className=" ">
                                <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Total Students Cleared</h2>
                                <div className="bg-[#21C55D] lg:w-2/3  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
                                    <span className="mx-auto">1 </span>

                                </div>
                            </div>

                        </div>
                        <div className=" text-sm text-gray-400 text-center">
                                All available XYZ
                        </div>
                        <div className=" flex p-4  justify-evenly ">
                            <div className=" ">
                                <h2 className="text-[#8B5CF6] text-sm font-bold mb-4"> Accepted</h2>
                                <div className="bg-[#8B5CF6] lg:w-3/3  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
                                    <span className="mx-auto">84 </span>

                                </div>
                            </div>
                            <div className=" ">
                                <h2 className="text-[#8B5CF6] text-sm font-bold mb-4"> Dist</h2>
                                <div className="bg-[#8B5CF6] lg:w-3/3  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
                                    <span className="mx-auto">1 </span>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-20">
                        <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Pre-assesment Tests</h2>
                        <h2 className="text-gray-400 text-sm font-bold">No Pre-assesment  Scheduled</h2>
                    </div>
                    <div className=" shadow-xl rounded  p-4">
                        <h2 className="text-[#f77171] text-sm font-bold"> Pre-Assesment Report</h2>
                        <div className=" my-8  ">
                            <div className="mx-auto " style={{ width: 100, height: 100 }} >
                                <CircularProgressbar className="my-2" value={percentage1} text={`${percentage1}%`} />
                                <div >26 Students</div>
                            </div>
                        </div>

                        <div className=" flex p-4  justify-evenly ">
                            <div className=" ">
                                <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Total Students Accepted</h2>
                                <div className="bg-[#21C55D] lg:w-2/3  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
                                    <span className="mx-auto">86 </span>

                                </div>
                            </div>
                            <div className=" ">
                                <h2 className="text-[#3B81F6] text-sm font-bold mb-4"> Total Students Cleared</h2>
                                <div className="bg-[#21C55D] lg:w-2/3  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
                                    <span className="mx-auto">8</span>

                                </div>
                            </div>

                        </div>
                        <div className=" text-sm text-gray-400 text-center">
                            All available XYZ
                        </div>
                        <div className=" flex p-4  justify-evenly ">
                            <div className=" ">
                                <h2 className="text-[#8B5CF6] text-sm font-bold mb-4"> Accepted</h2>
                                <div className="bg-[#8B5CF6] lg:w-3/3  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
                                    <span className="mx-auto">384 </span>

                                </div>
                            </div>
                            <div className=" ">
                                <h2 className="text-[#8B5CF6] text-sm font-bold mb-4"> Dist</h2>
                                <div className="bg-[#8B5CF6] lg:w-3/3  text-gray-100 font-bold py-2 px-4 rounded-full inline-flex items-center">
                                    <span className="mx-auto">38 </span>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Dashboard;
