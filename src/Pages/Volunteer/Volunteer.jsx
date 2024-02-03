
import { useEffect, useState } from 'react';
import VolunteerIntro from './VolunteerIntro';

const Volunteer = () => {
  const [Volunteer_Data, setData] = useState([]);

  useEffect(() => {
    fetch('https://ubf-server.vercel.app/volunteer/')
      .then(response => response.json())
      .then(data => setData(data.slice(0,50)))
      .catch(error => console.error(error));
  }, []);
    return (
        
        <div>

            <div className='bg-slate-100  h-auto p-5 rounded'>
              <div className=' flex justify-center'>

              <div className='grid  lg:grid-cols-4 md:grid-cols-3  grid-cols-2 gap-2 '>
                
                {
                  Volunteer_Data.map(v=> <VolunteerIntro key={v._id} element={v}></VolunteerIntro>
                  )
                }
              </div>
                </div>

            </div>
        </div>
    );
};

export default Volunteer;