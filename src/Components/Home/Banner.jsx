import React from 'react';
import star from '../../assets/Images/star.png'
import Public from '../../assets/Images/Speak.png'
import bitFast from '../../assets/Images/Briefcase.png'
import idea from '../../assets/Images/idea.png'
import halfStar from '../../assets/Images/half star.png'
import bannerImg from '../../assets/Images/section1.png'
import cap from '../../assets/Images/cap.png'
import list from '../../assets/Images/list.png'
import color from '../../assets/Images/color.png'
import icons from '../../assets/Images/Frame.png'


import img1 from '../../assets/Images/greenish.png'
import img2 from '../../assets/Images/duo.png'
import img3 from '../../assets/Images/Codecov.png'
import img4 from '../../assets/Images/Testing.png'
import img5 from '../../assets/Images/Magic.png'
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <>

            <div className='bannerLeft mt-[66px]'>



                <div className='  lg:w-[312px] CreateSection lg:h-[42px] lg:flex gap-[18px] justify-center items-center'   >


                    <img src={icons} className='w-[24px] h-[24px]' alt="" />


                    <div className='flex gap-[5px]'>
                        <img src={star} className='w-[18px] h-[18px]' alt="" />
                        <img src={star} className='w-[18px] h-[18px]' alt="" />
                        <img src={star} className='w-[18px] h-[18px]' alt="" />
                        <img src={star} className='w-[18px] h-[18px]' alt="" />
                        <img src={halfStar} className='w-[18px] h-[18px]' alt="" />
                    </div>

                    <p className=" text-[14px]  text-white font-black  ">‘’A JOY TO USE’’</p>


                </div>

                <div className='flex'>

                    <div className='lg:w-[618px]'>
                        <div className='lg:w-[528px] mt-[6px]'>
                            <h1 className='lg:text-[64px] font-bold lg:leading-[82px]'>Up Your Skills To Advance Your Career Path</h1>

                            <p className='lg:w-[519px] mt-[18px] text-[20px] text-primary'>Provides you with the latest online learning system and material that help your knowledge growing.</p>


                            <div className='flex gap-5 mt-[40px]'>
                                <div className='lg:w-[151px] Create lg:h-[56px] lg:flex justify-center items-center'  >
                                    <button className=" text-[16px]  text-white font-semibold  ">Get Started</button>
                                </div>
                                <div className='lg:w-[156px] CreateTrial lg:h-[56px] lg:flex justify-center items-center'  >
                                    <button className=" text-[16px]    ">Get free trial</button>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-[34px] mt-[50px]'>
                            <div className='flex gap-[10px] items-center'>
                                <img src={Public} className='w-[32px] h-[32px]' alt="" />
                                <p className='text-lg font-normal'>Public Speaking</p>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <img src={bitFast} className='w-[32px] h-[32px]' alt="" />
                                <p className='text-lg font-normal'>Career-Oriented</p>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <img src={idea} className='w-[32px] h-[32px]' alt="" />
                                <p className='text-lg font-normal'>Creative Thinking</p>
                            </div>


                        </div>
                    </div>





                    <div>

                        <div className='-mt-[100px]  '>
                            <img src={bannerImg} className='lg:w-[595px]  ' alt="" />

                        </div>




                        <div className='LearningSection  lg:w-[170px] py-[26px] relative  -ml-[70px]  -mt-[520px]'>

                            <div className=''>
                                <img src={cap} className='w-[40px] mx-auto  h-[40px]' alt="" />
                                <p className='text-lg font-medium mt-[14px] text-center '><span className='text-[18px] font-semibold'>100k+</span> Students Learn Daily</p>
                            </div>


                        </div>


                        <div className='LearningSection  lg:w-[181px] py-[18px] px-[16px] relative mt-[100px]  ml-[300px] '>

                            <div className=''>
                                <img src={list} className='w-[40px]   h-[40px]' alt="" />
                                <p className='text-[18px] font-medium my-[12px]'>Trained Teachers</p>

                                <img src={color} alt="" />
                            </div>


                        </div>


                    </div>



                </div>






            </div>

            <div className='Responsive_navbar mt-[80px]'>

                <p className='text-center font-semibold text-[24px] text-primary'>Our Trusted partners</p>

                <Marquee speed={70}>
                    <div className=' lg:mt-[50px] mt-[30px]'>
                        <div className='flex gap-[16px] lg:gap-[74px]'>
                            <img src={img2} className='lg:w-[154px] ml-[64px] w-[68px] h-[16px] lg:h-[36px]' alt="" />
                            <img src={img3} className='lg:w-[186px]  lg:h-[36px] w-[82px] h-[16px] ' alt="" />
                            <img src={img4} className='lg:w-[140px] w-[68px] h-[16px] lg:h-[36px]' alt="" />
                            <img src={img1} className='lg:w-[200px] w-[68px] h-[16px] lg:h-[36px]' alt="" />
                            <img src={img5} className='lg:w-[234px] w-[100px] h-[16px]  lg:h-[36px]' alt="" />
                        </div>
                    </div>

                </Marquee>

            </div>

        </>
    );
};

export default Banner;