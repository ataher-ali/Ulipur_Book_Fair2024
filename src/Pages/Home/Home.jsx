
import Marquee from "react-fast-marquee";
import Gest from "../Gest/Gest";

const Home = () => {
    return (
        <div>



            <Marquee speed='10' pauseOnHover='true' >

            </Marquee>


            <div className="mx-2 md:mx-10 lg:mx-36">
                <img className="w-screen rounded-xl" src="https://i.ibb.co/prkzn7F/20240201-170052-0000.png" alt="" />



                <h3 className="text-2xl font-bold text-center  mt-6">বিস্তারিত জানতে </h3>
                <div className="flex justify-center mb-7 my-2">

                    <a className="btn btn-outline btn-ghost btn-sm mx-1 text-xs shadow-md" target="_blank" href="https://www.facebook.com/friendsfear" rel="noreferrer">Facebook Page</a>
                    <a className="btn btn-outline btn-ghost btn-sm text-xs  mx-1 shadow-md" target="_blank" href="https://www.facebook.com/groups/1046023565958338" rel="noreferrer">Facebook Group</a>
                </div>
            </div>
            <Gest></Gest>

            <div className="mx-2 md:mx-10 lg:mx-36">
                <div className="flex justify-center items-center my-5 mx-2 ">

                <img className="ms-1 rounded-md border border-black shadow-lg h-60   w-60" src="https://i.ibb.co/Ltk5Hxr/1.png" alt="" />
                <div className="m-4">
                    <h2 className="text-xl m-2 text-cyan-800"> সভাপতিত্ব করবেন   </h2>
                    <h2 className="text-3xl font-bold ms-2 text-green-800"> জুলফিকার আলী (সেনা)  </h2>
                    <p className="text-lg m-2">প্রতিষ্ঠাতা সদস্য,ফ্রেন্ডস্ ফেয়ার</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;