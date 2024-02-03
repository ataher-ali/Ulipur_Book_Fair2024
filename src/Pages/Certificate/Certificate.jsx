import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Certificate = () => {
    const certificate_data = useLoaderData()

    const { id, name, competition, division, certificate } = certificate_data
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
                    </tbody>
                </table>
                    <div className='border border-black'></div>
            </div>

            <div className='mx-2  m-2 lg:mt-8 lg:mx-10 flex justify-center'>

                <div >
                <img className=' lg:h-60 rounded shadow' src={certificate} alt="" />
                <button className='btn mx-auto block shadow-lg m-4 font-medium text-sm btn-accent'>Doownlod</button>
                
                </div>
            </div>
        </div>
    );
};

export default Certificate;