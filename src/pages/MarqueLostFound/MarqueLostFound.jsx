import Marquee from "react-fast-marquee";
import lost1 from "../../../public/lost1.jpg"
import lost2 from "../../../public/lost2.jpg"
import lost3 from "../../../public/lost3.jpg"
import lost4 from "../../../public/lost4.jpg"
import lost5 from "../../../public/lost5.jpg"
import lost6 from "../../../public/lost6.jpg"
import lost7 from "../../../public/lost7.jpg"

const MarqueLostFound = () => {
    return (
        <div className='py-6' data-aos="zoom-in" data-aos-duration="2000">
            <div>
                <p className='text-5xl font-bold text-center mb-10'>Lost And Found </p>
            </div>
            <Marquee className='mb-20'>
                <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                    <figure>
                        <img
                            src={lost1}
                            className="h-60 rounded-2xl"
                            alt="Shoes" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                    <figure>
                        <img
                            src={lost2}
                            className="h-60 rounded-2xl"
                            alt="Shoes" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                    <figure>
                        <img
                            src={lost3}
                            className="h-60 rounded-2xl"
                            alt="Shoes" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                    <figure>
                        <img
                            src={lost4}
                            className="h-60 rounded-2xl"
                            alt="Shoes" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                    <figure>
                        <img
                            src={lost5}
                            className="h-60 rounded-2xl"
                            alt="Shoes" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                    <figure>
                        <img
                            src={lost6}
                            className="h-60 rounded-2xl"
                            alt="Shoes" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-80 shadow-xl ml-5">
                    <figure>
                        <img
                            src={lost7}
                            className="h-60 rounded-2xl"
                            alt="Shoes" />
                    </figure>

                </div>
            </Marquee>
        </div>
    );
};

export default MarqueLostFound;