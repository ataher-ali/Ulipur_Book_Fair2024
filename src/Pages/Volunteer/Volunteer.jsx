import React from 'react';

const Volunteer = () => {
    return (
        
        <div>
            <div className=' mx-auto justify-center my-10 flex gap-2 '>
                <input type="text" placeholder="Volunteer ID. Number" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-neutral">আনুসন্ধান</button>
            </div>
            <div className='bg-slate-100 mx-2 h-auto p-5 rounded'>

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://cutt.ly/xwZQcXxK" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">জিয়ন রায়হান </h2>
    <p> প্রধান সমন্বয়ক, <br />
২৮ তম উলিপুর বইমেলা পরিচালনা কমিটি</p>
    <div className="card-actions">
      <button className="btn btn-neutral">বিস্তারিত</button>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default Volunteer;