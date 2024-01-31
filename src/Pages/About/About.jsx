import ReactPlayer from "react-player";

const About = () => {
    return (
        <div>
            <div className="mx-2 md:mx-10 lg:mx-36">
                <h2 className="text-center text-3xl font-bold my-4"> About </h2>

                <div className="my-2">
                    <p className="text-justify">
                    </p>

                <h2 className="text-center text-3xl font-bold my-4"> ২৬ তম বইমেলা </h2>
                <div className="flex justify-center">
                <ReactPlayer url='https://www.youtube.com/watch?v=PaCvd2mTjoo&ab_channel=Channel24'  />

                </div>
                </div>
            </div>
        </div>
    );
};

export default About;