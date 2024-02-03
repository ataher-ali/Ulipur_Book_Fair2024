import { Link } from "react-router-dom";

const GestCard = (params) => {
    const { name,picture,gest,job} = params.element;
    return (
        <div>
            <Link>
                <div className="  m-4">
                    <a href=""  className=" w-72 group relative block h-64 sm:h-80  lg:h-96">
                        <span className="absolute  border-2 border-dashed rounded-md  "></span>

                        <div
                            className="relative flex h-full border items-end   rounded-md border-black bg-white transition-transform  "
                        >
                            <div
                                className="p-4    group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                            >
                                <img className="ms-1   rounded-md border  border-black shadow-lg h-32 lg:h-60   " src={picture} alt="" />
                                    

                                <h2 className="mt-4 text-xl font-semibold sm:text-xl">{gest}</h2>
                                <h2 className="mt-4 text-base font-medium sm:text-base">{name} </h2>
                            </div>

                            <div
                                className="absolute p-4 opacity-0 w-full bg-slate-800 text-white rounded-b-md transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                            >
                                <span>
                                <h2 className="mt-4 text-base font-bold sm:text-xl">{name}</h2>
                                

                                <p className="mt-4 text-xs sm:text-base">
                                    {job}
                                </p>
                                </span>
                                {/* <img className="ms-1 rounded-md border border-black p-2 shadow-lg h-60 w-60" src={picture} alt="" /> */}


                            
                            </div>
                        </div>
                    </a>
                </div>
            </Link>
        </div>
    );
};

export default GestCard;