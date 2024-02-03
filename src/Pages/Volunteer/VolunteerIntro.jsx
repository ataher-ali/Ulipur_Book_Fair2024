
import { Link } from 'react-router-dom';

const VolunteerIntro = (params) => {
    const { url,name,picture,designation} = params.element;
    console.log(params.element);
    return (
        <div className='lg:p-4 flex justify-center'>
            {/* <div className="card w-5/6 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={picture} alt="Shoes" className="rounded-xl  " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {name} </h2>
                    <p> {designation}
                    </p>
                    <div className="card-actions">
                        <Link to={`/volunteer/${url}`}>
                        <button className="btn btn-neutral btn-outline">বিস্তারিত</button>
                        </Link>
                    </div>
                </div>
            </div> */}
            
            <Link to={`/volunteer/${url}`} className="group  w-56 relative block bg-black">
  <img
    alt={name}
    src={picture}
    className="absolute  inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p> */}

    {/* <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p> */}

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        <p className="text-sm text-white">
         {designation}
        </p>
      </div>
    </div>
  </div>
            </Link>
            
        </div>
    );
};

export default VolunteerIntro;