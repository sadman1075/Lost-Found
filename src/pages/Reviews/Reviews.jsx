import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import reviewer from "../../../public/me.jpg"
import reviewer2 from "../../../public/me2.jpg"
import reviewer3 from "../../../public/me3.jpg"
const Reviews = () => {
    return (
        <div>
            <div>
                <div className=' mb-20 mt-20'>
                    <div className='flex justify-center'>
                        <p className="text-[rgb(116,155,63)] p-2 text-center  w-28 bg-lime-100  ">Testimonial</p>

                    </div>

                    <div>
                        <h1 className='text-center font-bold text-5xl mt-5'>What Our Customers Say</h1>
                        <p className='text-center mt-5'>Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest</p>
                    </div>

                </div>
                <div>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='lg:flex justify-center items-center pb-10'>
                                <div className='w-full lg:w-1/2'>
                                    <img className='mx-auto w-3/4 rounded-full ' src={reviewer} alt="" />
                                </div>
                                <div className='w-full lg:w-1/2'>
                                    <p>"Lost & Found has been a game-changer! I lost my wallet at a busy café and had almost given up hope. Thankfully, someone found it and posted on the platform. Within hours, I was able to reconnect with the person and retrieve my wallet safely. The system is easy to use, and the community-driven approach makes it incredibly effective. I highly recommend it to anyone looking for a reliable way to reunite lost items with their rightful owners!"</p>
                                    <p className='mt-6 '><b>Sadman Shakib-</b>user</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:flex justify-center items-center pb-10'>
                                <div className='w-full lg:w-1/2'>
                                    <img className='mx-auto w-3/4 rounded-full' src={reviewer} alt="" />
                                </div>
                                <div className='w-full lg:w-1/2'>
                                    <p>"Lost & Found has been a game-changer! I lost my wallet at a busy café and had almost given up hope. Thankfully, someone found it and posted on the platform. Within hours, I was able to reconnect with the person and retrieve my wallet safely. The system is easy to use, and the community-driven approach makes it incredibly effective. I highly recommend it to anyone looking for a reliable way to reunite lost items with their rightful owners!"</p>
                                    <p className='mt-6 '><b>Sadman Shakib-</b>user</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:flex justify-center items-center pb-10'>
                                <div className='w-full lg:w-1/2'>
                                    <img className='mx-auto w-3/4 rounded-full' src={reviewer} alt="" />
                                </div>
                                <div className='w-full lg:w-1/2'>
                                    <p>"Lost & Found has been a game-changer! I lost my wallet at a busy café and had almost given up hope. Thankfully, someone found it and posted on the platform. Within hours, I was able to reconnect with the person and retrieve my wallet safely. The system is easy to use, and the community-driven approach makes it incredibly effective. I highly recommend it to anyone looking for a reliable way to reunite lost items with their rightful owners!"</p>
                                    <p className='mt-6 '><b>Sadman Shakib-</b>user</p>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Reviews;