import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCloudArrowDown } from "react-icons/fa6";

const Certificate = () => {
    const certificate_data = useLoaderData()

    const { id, name, competition, division, place,school } = certificate_data
    return (


        <div className="mx-2 md:mx-10 lg:mx-60">


            <div className="overflow-x-auto lg:mx-10">
                <table className="table">
                    {/* head */}
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>সনদ নং </th>
                            <th>:</th>
                            <td>{id}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>নাম </th>
                            <th>:</th>
                            <td>{name}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>প্রতিযোগিতা </th>
                            <th>:</th>
                            <td>{competition}</td>
                        </tr>
                        <tr>
                            <th>বিভাগ </th>
                            <th>:</th>
                            <td>{division}</td>
                        </tr>
                        <tr>
                            <th>স্থান</th>
                            <th>:</th>
                            <td>{place}</td>
                        </tr>
                        <tr>
                            <th>স্কুল</th>
                            <th>:</th>
                            <td>{school}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='border border-black'></div>
            </div>

            <div className='mx-2  m-2 lg:mt-8 lg:mx-10 flex justify-center'>

                {/* <div >
                    <img className=' lg:h-60 rounded shadow' src={certificate} alt="" />
                    <Link
                        to={certificate}
                        download="Example-PDF-document"
                        target="_blank"
                        rel="noreferrer"
                    >
                    <button className='btn btn-outline mx-auto block flex-row justify-center shadow-lg  m-4 font-medium text-sm bg-gray-200'>
                    <div className='flex items-center gap-2'>
                    <FaCloudArrowDown />
                    <span>Download file</span>
                    </div>
                    </button>
                        
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Certificate;