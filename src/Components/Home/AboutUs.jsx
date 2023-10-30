import React from 'react';
import '../SharedPage/Style.css'
import { CountUp } from 'use-count-up';
import platform from '../../assets/Images/platform.png'
import computer from '../../assets/Images/com.png'
import head from '../../assets/Images/head.png'
import { Link } from 'react-scroll';

const AboutUs = () => {
    return (
        <>
            <div id='About'  className='bannerLeft flex  items-center gap-[50px] mt-[170px]'>
                <div className=' lg:w-[360px]'>
                    <div className='flex gap-[10px] items-center'>
                        <hr className='hrLine' />
                        <p className='gradient_text  text-[20px] font-semibold'>About Us</p>

                    </div>
                    <p className=' text-[54px] font-semibold lg:leading-[70px]'>Best Learning Platform</p>
                </div>

                <div className='countSection  w-[800px]'>
                    <div className='flex  items-center text-white gap-[60px]'>

                        <div>
                            <p className='font-semibold text-[44px]'> <CountUp isCounting start={0} end={10} duration={3.2} />K+</p>
                            <p className='mt-[10px]'>Successful students</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[44px]'>  <CountUp isCounting start={0} end={10} duration={3.2} />K+</p>
                            <p className='mt-[10px]'>Trusted company</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[44px]'>  <CountUp isCounting start={0} end={1} duration={3.2} />M+</p>
                            <p className='mt-[10px]'>Active engagement </p>
                        </div>





                    </div>
                </div>

            </div>


            <div className='Responsive_navbar mt-[100px]'>
                <div className='flex gap-[94px]'>
                    <img src={platform} className='lg:-ml-5 lg:w-[580px]' alt="" />

                    <div>
                        <p className='text-primary text-[20px] '>Online learning program designed to prepare you for a  career. Courses include recorded video lectures, auto-graded.</p>

                        <div className='boxShadow flex items-center my-[20px] px-5 gap-[20px] w-[496px] h-[132px]'>
                            <img src={computer} className='w-[48px] h-[48px]' alt="" />

                            <div>
                                <h2 className='text-[22px] font-semibold'>500+ fresh & in-demand courses</h2>
                                <p className='text-lg text-primary mt-[4px]'>Anenim Njilam tempor sapier gravida done porta and b adrdit ipsum enim justo</p>
                            </div>

                        </div>
                        <div className='boxShadow flex items-center  px-5 gap-[20px] w-[496px] h-[132px]'>
                            <img src={head} className='w-[48px] h-[48px]' alt="" />

                            <div>
                                <h2 className='text-[22px] font-semibold'>100K+ students learning outcomes</h2>
                                <p className='text-lg text-primary mt-[4px]'>Anonym milldam temper sappier gravida done porta and b adroit ipsum.</p>
                            </div>

                        </div>

                        <Link className='lg:w-[198px] mt-[30px] Create lg:h-[56px] lg:flex justify-center items-center'   >

                            <button className=" text-[16px]  text-white font-semibold  ">Learn about more</button>


                        </Link>

                    </div>
                </div>

            </div>

        </>
    );
};

export default AboutUs;