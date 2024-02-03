import React from 'react';
import {  useLoaderData } from 'react-router-dom';

const VolunteerCard = () => {
    const Volunteer_Data = useLoaderData()
    const {name,designation,picture,facebook,idno,whatsapp}=Volunteer_Data
    return (
        <div>
            <div className='flex justify-center'>
                <div >
                

                <div className='my-4'>

                <div className="overflow-x-auto lg:mx-10">
                <table className="table">
                    {/* head */}
                    <tbody>
                        <tr >
                            <div className='mx-auto '>

                <img src={picture} className='h-44  rounded-tr-md shadow-xl' alt="" />
                            </div>

                        </tr>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>নাম</th>
                            <th>:</th>
                            <td>{name}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th> পদবি </th>
                            <th>:</th>
                            <td>{designation}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>আইডি নং </th>
                            <th>:</th>
                            <td>{idno}</td>
                        </tr>
                        <tr>
                            <th> কমিটি </th>
                            <th>:</th>
                            <td>২৮ তম উলিপুর বই মেলা কমিটি</td>
                        </tr>
                        <tr>
                            <th>যোগাযোগ</th>
                            <th>:</th>                            <th>
                <a target='_blank' className='btn btn-outline btn-sm my-4' href={facebook}> Facebook </a>

                            </th>
                        </tr>
                    </tbody> 
                </table>
                <div className='border border-black'></div>
                </div>
                
                </div>
                
                {/* <a target='_blank' className='btn btn-outline my-4 mx-2'  href={`https://wa.me/+88${whatsapp}`}> WhatsApp </a> */}

                </div>

            </div>
        </div>
    );
};

export default VolunteerCard;