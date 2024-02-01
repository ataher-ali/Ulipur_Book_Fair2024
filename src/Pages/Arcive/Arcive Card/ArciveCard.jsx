import { Link } from "react-router-dom";

const ArciveCard = () => {
    return (
        <>
        
        <Link to={`/`}>
        
            <div className="card m-2 border w-96 bg-base-100 shadow-xl">


            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/prkzn7F/20240201-170052-0000.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">২৮তম উলিপুর বই মেলা</h2>
                    <p>২০২৪</p>
                    <div className="card-actions">
                    <button className="btn  btn-outline bg-gray-100 text-black "> বিস্তারিত </button>
                   
                    
                </div>
            </div>
        </div>
        </div>
        </Link>
        </>
    );
};

export default ArciveCard;