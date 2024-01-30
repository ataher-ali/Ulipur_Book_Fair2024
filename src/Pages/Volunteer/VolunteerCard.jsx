import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VolunteerCard = () => {
    const Volunteer_Data = useLoaderData()
    const {name,designation,picture}=Volunteer_Data
    return (
        <div>
            <div className='mx-auto'>
                <div>
                <img src={picture} alt="" />
                <p> {name}</p>
                <p> {designation}</p>
                <p> {name}</p>

                </div>

            </div>
        </div>
    );
};

export default VolunteerCard;