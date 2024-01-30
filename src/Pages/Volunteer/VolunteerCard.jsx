import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VolunteerCard = () => {
    const Volunteer_Data = useLoaderData()
    const {name,designation,picture,facebook,idno}=Volunteer_Data
    return (
        <div>
            <div className='flex justify-center'>
                <div>
                <img src={picture} className='h-72 rounded' alt="" />
                
                <div className='my-4'>
                <p className='text-3xl my-4'> {name}</p>
                <p className='my-2 '> <span className='font-bold'>পদবি :</span> {designation}<br /><span className='text-xl'>২৮ তম উলিপুর বই মেলা কমিটি</span></p>
                <p className='my-2'> <span className='font-bold'> আইডি নং :</span> {idno}</p>

                </div>
                
                <a className='btn btn-outline my-4' href={facebook}> Facebook </a>

                </div>

            </div>
        </div>
    );
};

export default VolunteerCard;