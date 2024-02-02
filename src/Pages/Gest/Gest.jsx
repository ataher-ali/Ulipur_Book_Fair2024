
import { useEffect, useState } from 'react';
import GestCard from './GestCard';

const Gest = () => {
    const [gestData, setData] = useState([]);

  useEffect(() => {
    fetch('https://ubf-server.vercel.app/gest/')
      .then(response => response.json())
      .then(data => setData(data.slice(0,50)))
      .catch(error => console.error(error));
  }, []);
    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-10 text-cyan-800"> এবারের আমন্ত্রিত অতিথিবৃন্দ </h2>

            
                        <div className='bg-slate-100  h-auto p-5 rounded'>
              <div className=' flex justify-center'>

              <div className='grid  lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-2 '>
                
            {
                  gestData.map(g=> <GestCard key={g._id} element={g}></GestCard>
                  )
            }
            </div>
            </div>
            </div>
            {/* <GestCard></GestCard> */}
        </div>
    );
};

export default Gest;