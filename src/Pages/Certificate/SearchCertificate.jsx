import { Link } from "react-router-dom";





const SearchCertificate = () => {
    const search_by_id =()=>{
        event.preventDefault(); 
        const id = event.target.id.value
        console.log(id);
       
    }
    return (
        <div>
            <div className='my-20'>
            <h2 className='text-center text-3xl my-7 bold'>সনদ যাচাই</h2> 
            <div className=' mx-auto justify-center  flex gap-2 '>

            <form onSubmit={search_by_id} className="flex gap-2 mt-5 ">

                <input type="id" name='id' placeholder="Certificate Number" className="input input-bordered w-full max-w-xs" />
                
                <button className="btn btn-neutral">
                   আনুসন্ধান
                </button>
            </form>
            
            </div>
            </div>
            
        </div>
    );
};

export default SearchCertificate;