
import { useEffect, useState } from 'react';
import VolunteerIntro from './VolunteerIntro';

const Volunteer = () => {
  const [Volunteer_Data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1010/volunteer/')
      .then(response => response.json())
      .then(data => setData(data.slice(0,50)))
      .catch(error => console.error(error));
  }, []);
    return (
        
        <div>
            <div className=' mx-auto justify-center my-10 flex gap-2 '>
                <input type="text" placeholder="Volunteer ID. Number" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-neutral">আনুসন্ধান</button>
            </div>
            <div className='bg-slate-100 mx-2 h-auto p-5 rounded'>

              <div className=''>
                {
                  Volunteer_Data.map(v=> <VolunteerIntro key={v._id} element={v}></VolunteerIntro>
                  )
                }
              </div>

            </div>
        </div>
    );
};

export default Volunteer;