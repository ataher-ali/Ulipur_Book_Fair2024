import React from "react";
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
                <div className="flex justify-center my-2">

                    <a className="btn btn-outline btn-ghost btn-sm mx-1 text-xs shadow-md" target="_blank" href="https://www.facebook.com/friendsfear" rel="noreferrer">Facebook Page</a>
                    <a className="btn btn-outline btn-ghost btn-sm text-xs  mx-1 shadow-md" target="_blank" href="https://www.facebook.com/groups/1046023565958338" rel="noreferrer">Facebook Group</a>
                </div>
                <Gest></Gest>
            </div>

        </div>
    );
};

export default Home;