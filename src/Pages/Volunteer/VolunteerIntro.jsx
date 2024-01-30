
import { Link } from 'react-router-dom';

const VolunteerIntro = (params) => {
    const { url,name,picture,designation} = params.element;
    console.log(params.element);
    return (
        <div className='lg:p-4 flex justify-center'>
            <div className="card w-5/6 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={picture} alt="Shoes" className="rounded-xl  " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {name} </h2>
                    <p> {designation} <br />
                    ২৮ তম উলিপুর বই মেলা কমিটি 
                    </p>
                    <div className="card-actions">
                        <Link to={`/volunteer/${url}`}>
                        <button className="btn btn-neutral btn-outline">বিস্তারিত</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerIntro;