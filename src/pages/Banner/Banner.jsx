import banner1 from "../../../public/banner 1.jpg"
import banner2 from "../../../public/banner 2.jpg"
import banner3 from "../../../public/banner 3.jpg"
import banner4 from "../../../public/banner 4.jpg"
const Banner = () => {
    return (
        <div className="pt-24 p-2 lg:pt-32 " data-aos="zoom-in" data-aos-duration="2000" >
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src={banner1}
                        className="w-full h-2/3 rounded-xl" />
                    <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={banner2}
                        className="w-full h-2/3 rounded-xl" />
                    <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img
                        src={banner3}
                        className="w-full h-2/3 rounded-xl" />
                    <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={banner4}
                        className="w-full  h-2/3 rounded-xl" />
                    <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;