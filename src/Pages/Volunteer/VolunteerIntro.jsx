import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerIntro = (params) => {
    const { url,name } = params.element;
    console.log(params.element);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://cutt.ly/xwZQcXxK" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {name} </h2>
                    <p> প্রধান সমন্বয়ক, <br />
                        ২৮ তম উলিপুর বইমেলা পরিচালনা কমিটি</p>
                    <div className="card-actions">
                        <Link to={`/volunteer/${url}`}>
                        <button className="btn btn-neutral">বিস্তারিত</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerIntro;