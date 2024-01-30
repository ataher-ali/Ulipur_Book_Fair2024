import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VolunteerCard = () => {
    const Volunteer_Data = useLoaderData()
    const {name,designation,picture,facebook,idno,whatsapp}=Volunteer_Data
    return (
        <div>
            <div className='flex justify-center'>
                <div>
                <img src={picture} className='h-72 rounded-xl shadow-xl' alt="" />
                
                <div className='my-4'>
                <p className=' font-bold text-3xl my-4'> {name}</p>
                <p className='my-2 '> <span className='font-bold'>পদবি :</span> {designation}</p>
                <p className='my-2 font-bold text-xl'> ২৮ তম উলিপুর বই মেলা কমিটি </p>
                <p className='my-2'> <span className='font-bold'> আইডি নং :</span> {idno}</p>

                </div>
                
                <a target='_blank' className='btn btn-outline my-4' href={facebook}> Facebook </a>
                <a target='_blank' className='btn btn-outline my-4 mx-2'  href={`https://wa.me/+88${whatsapp}`}> WhatsApp </a>

                </div>

            </div>
        </div>
    );
};

export default VolunteerCard;