import React from 'react';
import User from '../../assets/Images/Icon11.png'
import web from '../../assets/Images/Icon 22.png'
import OurSpecialty from '../../assets/Images/section4.png'
import tikTok from '../../assets/Images/tiktok.png'
import usingComputer from '../../assets/Images/usingComputer.png'
import code from '../../assets/Images/code.png'
import marketing from '../../assets/Images/Icon 33.png'
import blackStar from '../../assets/Images/BlackStar 5.png'
import clock from '../../assets/Images/Clock.png'
import JaneCooper from '../../assets/Images/JaneCooper.png'
import JennyWilson from '../../assets/Images/JennyWilson.png'
import EstherHoward from '../../assets/Images/EstherHoward.png'
import { BiSolidChevronRight } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-scroll';

const Services = () => {
    return (
        <>
            <div id='Program' className='Responsive_navbar'>
                <div className=''>
                    <div className='flex gap-[10px] mt-[170px] items-center justify-center'>
                        <hr className='hrLine' />
                        <p className='gradient_text  text-[20px]  font-semibold'>Our Services</p>

                    </div>
                    <p className='text-center mt-5 font-semibold lg:text-[54px]'>Fostering a Playful & Engaging Learning Environment</p>
                </div>



                <Swiper


                    autoplay={{
                        delay: 4000,

                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}


                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,

                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className='lg:pb-[71px] pb-[120px]'>


                        <div className='lg:flex mt-[80px] gap-[30px]'>
                            <div className='boxShadow2 lg:w-[370px] p-[40px] '>
                                <div className='flex gap-[20px] items-center'>
                                    <img src={User} className='w-[48px] h-[48px]' alt="" />
                                    <h2 className='text-[24px] font-semibold'>User Experience</h2>
                                </div>
                                <p className='mt-[30px] text-lg text-primary'>There are many variatio passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <button className='mt-[40px]  LearnMoreButton  w-[154px] h-[38px] flex gap-[18px] justify-center items-center font-medium text-[16px]'>Learn More <BiSolidChevronRight className='w-[24px] h-[24px]' /> </button>

                            </div>
                            <div className='lg:my-0 my-[30px] boxShadow2 lg:w-[370px] p-[40px] '>
                                <div className='flex gap-[20px] items-center'>
                                    <img src={web} className='w-[48px] h-[48px]' alt="" />
                                    <h2 className='text-[24px] font-semibold'>Web Development</h2>
                                </div>
                                <p className='mt-[30px] text-lg text-primary'>There are many variatio passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <button className='mt-[40px] LearnMoreButton  w-[154px] h-[38px] flex gap-[18px] justify-center items-center font-medium text-[16px]'>Learn More <BiSolidChevronRight className='w-[24px] h-[24px]' /> </button>

                            </div>
                            <div className='boxShadow2 lg:w-[370px] p-[40px] '>
                                <div className='flex gap-[20px] items-center'>
                                    <img src={marketing} className='w-[48px] h-[48px]' alt="" />
                                    <h2 className='text-[24px] font-semibold'>Marketing</h2>
                                </div>
                                <p className='mt-[30px] text-lg text-primary'>There are many variatio passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <button className='mt-[40px] LearnMoreButton  w-[154px] h-[38px] flex gap-[18px] justify-center items-center font-medium text-[16px]'>Learn More <BiSolidChevronRight className='w-[24px] h-[24px]' /> </button>

                            </div>

                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='lg:flex mt-[80px] gap-[30px]'>
                            <div className='boxShadow2 lg:w-[370px] p-[40px] '>
                                <div className='flex gap-[20px] items-center'>
                                    <img src={User} className='w-[48px] h-[48px]' alt="" />
                                    <h2 className='text-[24px] font-semibold'>User Experience</h2>
                                </div>
                                <p className='mt-[30px] text-lg text-primary'>There are many variatio passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <button className='mt-[40px]  LearnMoreButton  w-[154px] h-[38px] flex gap-[18px] justify-center items-center font-medium text-[16px]'>Learn More <BiSolidChevronRight className='w-[24px] h-[24px]' /> </button>

                            </div>
                            <div className='lg:my-0 my-[30px] boxShadow2 lg:w-[370px] p-[40px] '>
                                <div className='flex gap-[20px] items-center'>
                                    <img src={web} className='w-[48px] h-[48px]' alt="" />
                                    <h2 className='text-[24px] font-semibold'>Web Development</h2>
                                </div>
                                <p className='mt-[30px] text-lg text-primary'>There are many variatio passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <button className='mt-[40px] LearnMoreButton  w-[154px] h-[38px] flex gap-[18px] justify-center items-center font-medium text-[16px]'>Learn More <BiSolidChevronRight className='w-[24px] h-[24px]' /> </button>

                            </div>
                            <div className='boxShadow2 lg:w-[370px] p-[40px] '>
                                <div className='flex gap-[20px] items-center'>
                                    <img src={marketing} className='w-[48px] h-[48px]' alt="" />
                                    <h2 className='text-[24px] font-semibold'>Marketing</h2>
                                </div>
                                <p className='mt-[30px] text-lg text-primary'>There are many variatio passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <button className='mt-[40px] LearnMoreButton  w-[154px] h-[38px] flex gap-[18px] justify-center items-center font-medium text-[16px]'>Learn More <BiSolidChevronRight className='w-[24px] h-[24px]' /> </button>

                            </div>

                        </div>

                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='lg:flex mt-[80px] gap-[30px]'>
                            <div className='boxShadow2 lg:w-[370px] p-[40px] '>
                                <div className='flex gap-[20px] items-center'>
                                    <img src={User} className='w-[48px] h-[48px]' alt="" />
                                    <h2 className='text-[24px] font-semibold'>User Experience</h2>
                                </div>
                                <p className='mt-[30px] text-lg text-primary'>There are many variatio passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <button className='mt-[40px]  LearnMoreButton  w-[154px] h-[38px] flex gap-[18px] justify-center items-center font-medium text-[16px]'>Learn More <BiSolidChevronRight className='w-[24px] h-[24px]' /> </button>

                            </div>
                            <div className='lg:my-0 my-[30px] boxShadow2 lg:w-[370px] p-[40px] '>
                                <div className='flex gap-[20px] items-center'>
                                    <img src={web} className='w-[48px] h-[48px]' alt="" />
                                    <h2 className='text-[24px] font-semibold'>Web Development</h2>
                                </div>
                                <p className='mt-[30px] text-lg text-primary'>There are many variatio passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <button className='mt-[40px] LearnMoreButton  w-[154px] h-[38px] flex gap-[18px] justify-center items-center font-medium text-[16px]'>Learn More <BiSolidChevronRight className='w-[24px] h-[24px]' /> </button>

                            </div>
                            <div className='boxShadow2 lg:w-[370px] p-[40px] '>
                                <div className='flex gap-[20px] items-center'>
                                    <img src={marketing} className='w-[48px] h-[48px]' alt="" />
                                    <h2 className='text-[24px] font-semibold'>Marketing</h2>
                                </div>
                                <p className='mt-[30px] text-lg text-primary'>There are many variatio passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <button className='mt-[40px] LearnMoreButton  w-[154px] h-[38px] flex gap-[18px] justify-center items-center font-medium text-[16px]'>Learn More <BiSolidChevronRight className='w-[24px] h-[24px]' /> </button>

                            </div>

                        </div>

                    </SwiperSlide>



                </Swiper>
            </div>


            <div className='flex gap-[125px] items-center mt-[103px]'>
                <img src={OurSpecialty} className=' relative -mt-[52px] lg:w-[570px] 2xl:w-[600px]' alt="" />

                <div className='lg:w-[595px]'>
                    <div className='flex gap-[10px] mt-[170px] items-center '>
                        <hr className='hrLine' />
                        <p className='gradient_text  text-[20px]  font-semibold'>Our Services</p>

                    </div>
                    <h3 className='lg:text-[54px] font-semibold lg:leading-[70px] my-[20px]'>Our Process is Build Around Quality & Make it Perfect.</h3>

                    <p className='text-[20px] text-primary'>
                        It is a long established fact that a reader will be distracted by the read content of a page when looking at its layout. Thpoint of using Lorem Ipsum is that it has a more- normal distribution making it look like readable English.

                        Many desktop publishing packages and web page editors now use Lore Ipsum as their default model texnd a search for 'lorem ipsum' will uncover many of web sites still in their infancy.
                    </p>

                    <Link className='lg:w-[173px] mt-[48px] Create lg:h-[56px] lg:flex justify-center items-center'  >




                        <button className=" text-[16px]  text-white font-semibold  ">Discover More</button>


                    </Link>


                </div>
            </div>




            <div className='Responsive_navbar'>
                <div className='lg:w-[1170px] mx-auto'>
                    <div className='flex gap-[10px] mt-[170px] items-center justify-center '>
                        <hr className='hrLine' />
                        <p className='gradient_text  text-[20px]  font-semibold '>Explore Programs </p>

                    </div>

                    <h1 className='text-center lg:text-[54px] font-semibold my-[20px] lg:leading-[70px]'>Our Most Popular classes</h1>

                    <p className='text-[20px] text-primary  text-center'>Learning from renowned experts and engaging with a community of motivated learners can be a highly enriching experience. Let's join our famous class, the knowledge provided will definitely be useful for you.</p>

                </div>


                <div className='flex gap-[30px] mt-[80px]'>
                    {/* 1 */}
                    <div className='popularClassBox p-5 lg:w-[370px]'>
                        <img src={tikTok} alt="" />
                        <div className='flex justify-end mt-[20px]'>
                            <div className='lg:w-[132px] HoursMess lg:h-[29px] flex justify-center items-center'  >
                                <button className=" text-[14px]  flex gap-[6px] items-center justify-center  "> <img src={clock} className='w-4 h-4' alt="" /> 08 hr 12 mins</button>
                            </div>
                        </div>

                        <h4 className='textColorDe text-[14px] font-semibold '>Design</h4>
                        <h1 className='text-[24px] font-semibold  mt-[8px]'>Figma UI UX Design..</h1>
                        <p className='text-[16px] mt-[10px] text-primary'>Use Figma to get a job in UI Design, User Interface, User Experience design.</p>

                        <div className='flex gap-[10px] items-center mt-[20px]'>
                            <div className='flex gap-[5px] items-center justify-center FullStartBlack lg:h-[25px] lg:w-[143px]'>
                                <p className='text-primary text-[14px] font-semibold'>5.0</p>
                                <div className='flex gap-[3px]'>
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                </div>

                            </div>
                            <p className='text-[14px] text-primary'>(16,325)</p>
                        </div>



                        {/* Jane Cooper */}

                        <div className='flex justify-between items-center  mt-5'>
                            <div className='flex gap-[12px] items-center'>
                                <img src={JaneCooper} className='w-[40px] h-[40px]' alt="" />
                                <div>
                                    <h2 className='text-[14px] text-[#101828] font-medium'> Jane Cooper</h2>
                                    <p className='text-[14px] text-primary'>2012 Enrolled</p>
                                </div>
                            </div>

                            <div>
                                <h1 className='text-[26px] font-bold textColor23'>$17.84</h1>
                            </div>
                        </div>

                    </div>

                    {/* 2 */}
                    <div className='popularClassBox p-5 lg:w-[370px]'>
                        <img src={usingComputer} alt="" />
                        <div className='flex justify-end mt-[20px]'>
                            <div className='lg:w-[132px] HoursMess lg:h-[29px] flex justify-center items-center'  >
                                <button className=" text-[14px]  flex gap-[6px] items-center justify-center  "> <img src={clock} className='w-4 h-4' alt="" /> 06 hr 10 mins</button>
                            </div>
                        </div>

                        <h4 className='textColorDe text-[14px] font-semibold '>Design</h4>
                        <h1 className='text-[24px] font-semibold  mt-[8px]'>Learn With Shoaib...</h1>
                        <p className='text-[16px] mt-[10px] text-primary'>Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>

                        <div className='flex gap-[10px] items-center mt-[20px]'>
                            <div className='flex gap-[5px] items-center justify-center FullStartBlack lg:h-[25px] lg:w-[143px]'>
                                <p className='text-primary text-[14px] font-semibold'>5.0</p>
                                <div className='flex gap-[3px]'>
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                </div>

                            </div>
                            <p className='text-[14px] text-primary'>(11,325)</p>
                        </div>



                        {/* Jane Cooper */}

                        <div className='flex justify-between items-center  mt-5'>
                            <div className='flex gap-[12px] items-center'>
                                <img src={JennyWilson} className='w-[40px] h-[40px]' alt="" />
                                <div>
                                    <h2 className='text-[14px] text-[#101828] font-medium'>Jenny Wilson</h2>
                                    <p className='text-[14px] text-primary'>2012 Enrolled</p>
                                </div>
                            </div>

                            <div>
                                <h1 className='text-[26px] font-bold textColor23'>$12.84</h1>
                            </div>
                        </div>

                    </div>
                    {/* 3 */}
                    <div className='popularClassBox p-5 lg:w-[370px]'>
                        <img src={code} alt="" />
                        <div className='flex justify-end mt-[20px]'>
                            <div className='lg:w-[132px] HoursMess lg:h-[29px] flex justify-center items-center'  >
                                <button className=" text-[14px]  flex gap-[6px] items-center justify-center  "> <img src={clock} className='w-4 h-4' alt="" />06 hr 10 mins</button>
                            </div>
                        </div>

                        <h4 className='textColorDe text-[14px] font-semibold '>Design</h4>
                        <h1 className='text-[24px] font-semibold  mt-[8px]'>Building User Interface...</h1>
                        <p className='text-[16px] mt-[10px] text-primary'>Learn how to apply User Experience (UX) principles to your website designs.</p>

                        <div className='flex gap-[10px] items-center mt-[20px]'>
                            <div className='flex gap-[5px] items-center justify-center FullStartBlack lg:h-[25px] lg:w-[143px]'>
                                <p className='text-primary text-[14px] font-semibold'>5.0</p>
                                <div className='flex gap-[3px]'>
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                    <img src={blackStar} className='w-[16px] h-[16px]' alt="" />
                                </div>

                            </div>
                            <p className='text-[14px] text-primary'>(1,325)</p>
                        </div>



                        {/* Jane Cooper */}

                        <div className='flex justify-between items-center  mt-5'>
                            <div className='flex gap-[12px] items-center'>
                                <img src={EstherHoward} className='w-[40px] h-[40px]' alt="" />
                                <div>
                                    <h2 className='text-[14px] text-[#101828] font-medium'>Esther Howard</h2>
                                    <p className='text-[14px] text-primary'>2012 Enrolled</p>
                                </div>
                            </div>

                            <div>
                                <h1 className='text-[26px] font-bold textColor23'>$25.84</h1>
                            </div>
                        </div>

                    </div>
                </div>


                <Link className='lg:w-[223px] Create mx-auto mt-[50px] lg:h-[56px] lg:flex justify-center items-center'  >

                    <button className=" text-[16px]  text-white font-semibold  ">Explore All Programs</button>


                </Link>
            </div>

        </>
    );
};

export default Services;