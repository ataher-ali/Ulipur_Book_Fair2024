import React from 'react';

const SearchCertificate = () => {
    return (
        <div>
            <div className='my-20'>
            <h2 className='text-center text-3xl my-7 bold'>সনদ যাচাই</h2> 
            <div className=' mx-auto justify-center  flex gap-2 '>
                <input type="text" placeholder="Certificate Number" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-neutral">আনুসন্ধান</button>
            </div>
            </div>
            
        </div>
    );
};

export default SearchCertificate;