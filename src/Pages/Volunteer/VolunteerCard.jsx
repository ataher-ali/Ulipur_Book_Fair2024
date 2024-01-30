import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VolunteerCard = () => {
    const Volunteer_Data = useLoaderData()
    const {name}=Volunteer_Data
    return (
        <div>
            <div className='mx-auto'>
                <p>Name : {name}</p>

            </div>
        </div>
    );
};

export default VolunteerCard;