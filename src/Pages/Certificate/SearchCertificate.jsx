import React, { useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';

const SearchCertificate = () => {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState('');
    const handleButtonClick = () => {
        // Print the input value to the console (you can replace this with your desired logic)
        console.log('Input Value:', inputValue);
        
    };

    


    return (
        <>

<h2 className="text-center text-5xl font-bold my-10 text-cyan-800"> সনদ যাচাই  </h2>

        <div className='flex justify-center'>

                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Write Your Certificate Number "
                    className="input input-bordered w-full max-w-xs m-2"
                />
        </div>
                <Link to={`/certificate/${inputValue}`}>
                <button className='btn btn-outline mx-auto block w-1/4 bg-slate-200 m-2' onClick={handleButtonClick}>Search</button>
                </Link>
        </>

    );
};

export default SearchCertificate;