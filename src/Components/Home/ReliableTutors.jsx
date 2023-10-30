import React from 'react';
import TheresaWebb from '../../assets/Images/TheresaWebb.png'
import CourtneyHenry from '../../assets/Images/Courtney Henry.png'
import AlbertFlores from '../../assets/Images/AlbertFlores.png'
import MarvinMckinney from '../../assets/Images/MarvinMckinney.png'
import uxMapping from '../../assets/Images/mapping.png'
import design from '../../assets/Images/design.png'
import img99 from '../../assets/Images/image 998.png'
import threePillar from '../../assets/Images/threePillar.png'
import yellowFStar from '../../assets/Images/YellowFStar.png'
import yellowHStar from '../../assets/Images/yellowHStar.png'
import manSection from '../../assets/Images/bgMan.png'
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ReliableTutors = () => {
    return (
        <>
            <div className='Responsive_navbar mt-[170px]'>
                <div id='Universities' className='lg:w-[1170px] mx-auto'>
                    <div className='flex gap-[10px]  items-center justify-center '>
                        <hr className='hrLine' />
                        <p className='gradient_text  text-[20px]  font-semibold '>Reliable Tutors</p>

                    </div>

                    <h1 className='text-center lg:text-[54px] font-semibold my-[20px] lg:leading-[70px]'>Meet The Reliable Teachers</h1>

                    <p className='text-[20px] text-primary  text-center'>Learning from renowned experts and engaging with a community of motivated learners can be a highly enriching experience. Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
                </div>



                <div className='flex gap-[30px] mt-[80px]'>
                    {/* 1 */}
                    <div className='teacherBox lg:w-[270px] px-[20px] py-[30px]'>
                        <img src={TheresaWebb} className='w-[80px] h-[80px] mx-auto' alt="" />
                        <p className='text-[24px] font-semibold text-center mt-[10px]'>Theresa Webb</p>
                        <p className='gradient_text text-[16px] font-semibold text-center'>Lead Application Support Analyst</p>
                        <p className='text-primary text-[14px] text-center mt-[14px]'>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>


                        <Link className='mt-[26px] LearnMoreButton  w-full h-[36px] flex gap-[18px] justify-between px-[14px] py-[6px] items-center font-medium text-[16px]'>View profile <BiSolidChevronRight className='w-[24px] h-[24px]' /> </Link>


                    </div>

                    {/* 2 */}
                    <div className='teacherBox lg:w-[270px] px-[20px] py-[30px]'>
                        <img src={CourtneyHenry} className='w-[80px] h-[80px] mx-auto' alt="" />
                        <p className='text-[24px] font-semibold text-center mt-[10px]'>Courtney Henry</p>
                        <p className='gradient_text text-[16px] font-semibold text-center'>Director, Undergraduate Analytics & Planning</p>
                        <p className='text-primary text-[14px] text-center mt-[14px]'>Lead engineering teams at Figma, Pitch, and Protocol Labs.</p>


                        <Link className='mt-[26px] LearnMoreButton  w-full h-[36px] flex gap-[18px] justify-between px-[14px] py-[6px] items-center font-medium text-[16px]'>View profile <BiSolidChevronRight className='w-[24px] h-[24px]' /> </Link>


                    </div>

                    {/* 3 */}
                    <div className='teacherBox lg:w-[270px] px-[20px] py-[30px]'>
                        <img src={AlbertFlores} className='w-[80px] h-[80px] mx-auto' alt="" />
                        <p className='text-[24px] font-semibold text-center mt-[10px]'>Albert Flores</p>
                        <p className='gradient_text text-[16px] font-semibold text-center'>Career Educator</p>
                        <p className='text-primary text-[14px] text-center mt-[14px]'>Former PM for Linear, Lambda School, and On Deck.</p>


                        <Link className='mt-[50px] LearnMoreButton  w-full h-[36px] flex gap-[18px] justify-between px-[14px] py-[6px] items-center font-medium text-[16px]'>View profile <BiSolidChevronRight className='w-[24px] h-[24px]' /> </Link>


                    </div>
                    {/* 4 */}

                    <div className='teacherBox lg:w-[270px] px-[20px] py-[30px]'>
                        <img src={MarvinMckinney} className='w-[80px] h-[80px] mx-auto' alt="" />
                        <p className='text-[24px] font-semibold text-center mt-[10px]'>Marvin Mckinney</p>
                        <p className='gradient_text text-[16px] font-semibold text-center'>Co-op & Internships Program & Operations Manager</p>
                        <p className='text-primary text-[14px] text-center mt-[14px]'>Former frontend dev for Linear, Coinbase, and Postscript.</p>


                        <Link className='mt-[26px] LearnMoreButton  w-full h-[36px] flex gap-[18px] justify-between px-[14px] py-[6px] items-center font-medium text-[16px]'>View profile <BiSolidChevronRight className='w-[24px] h-[24px]' /> </Link>


                    </div>
                </div>



                <Link className='lg:w-[188px] Create mx-auto mt-[50px] lg:h-[56px] lg:flex justify-center items-center'  >

                    <button className=" text-[16px]  text-white font-semibold  ">See all Teachers </button>


                </Link>




                <div className='InputBackground mt-[170px] px-[70px] py-[80px]'>
                    <div className='flex justify-center gap-[75px] items-center'>
                        <div className='lg:w-[595px]'>
                            <div className='flex gap-[10px]  items-center '>
                                <hr className='hrLine' />
                                <p className='gradient_text  text-[20px]  font-semibold'>Request A Quote</p>

                            </div>
                            <h3 className='lg:text-[54px] font-semibold lg:leading-[70px] my-[20px]'>Get in touch to learn more about our services</h3>

                            <p className='text-[20px] text-primary'>
                                It sounds like you're describing a structured online learning program designed to equip individuals with the skills and knowledge necessary for a specific career path.
                            </p>




                        </div>

                        <div>

                            <form>
                                <div className='flex flex-col'>
                                    <label className='text-[20px] text-primary font-medium'>Full Name</label>
                                    <input placeholder='Type Here ' type="text" className='mt-[4px] text-[14px] yourInputElementId px-5 lg:w-[480px] lg:h-[64px] InputField' />
                                </div>
                                <div className='flex flex-col my-[10px]'>
                                    <label className='text-[20px] text-primary font-medium'>Email Address</label>
                                    <input placeholder='Type Here ' type="text" className='mt-[4px] text-[14px] yourInputElementId px-5 lg:w-[480px] lg:h-[64px] InputField' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-[20px] text-primary font-medium'>Description</label>
                                    <textarea placeholder='Type Here ' type="text" className='mt-[4px] text-[14px] yourInputElementId px-5 pt-[16px] lg:w-[480px] lg:h-[156px] InputField' />
                                </div>


                                <Link className='w-full mt-[30px] Create lg:h-[56px] lg:flex justify-center items-center'   >




                                    <button type='submit' className=" text-[16px]  text-white font-semibold  ">Submit Request</button>


                                </Link>
                            </form>

                        </div>
                    </div>

                </div>


                {/* Our Recent Blogs */}

                <div className='lg:flex gap-[30px] items-center mt-[170px]'>
                    <div className='lg:w-[370px]'>
                        <div className='flex gap-[10px]  items-center  '>
                            <hr className='hrLine' />
                            <p className='gradient_text  text-[20px]  font-semibold '>Reliable Tutors</p>

                        </div>

                        <h1 className=' lg:text-[54px] font-semibold my-[20px] lg:leading-[70px]'>Our Recent Blogs</h1>

                        <p className='text-[20px] text-primary lg:w-[315px] '>Learning from renowned experts and engaging with a community of motivated learners can highly enriching experience. Let's join a our famous class, the knowledge provided will definitely be useful for you.</p>
                    </div>

                    <div className='popularClassBox lg:w-[370px] px-5 pt-[20px] pb-[30px]'>
                        <img src={uxMapping} alt="" />

                        <p className='gradient_text text-[14px] font-semibold mt-[28px]'>November 14, 2017</p>
                        <p className='text-[24px] font-semibold mt-[12px]'>UX Mapping Methods</p>
                        <p className='text-[16px] text-[#828489] mt-[10px]'>Visual-design principles can beconsistently throughout the process of creating a ghtd polished UX map...</p>

                        <div className='flex gap-[10px] mt-[24px]'>
                            <div className='lg:w-[84px] ResearchSection lg:h-[28px] lg:flex justify-center items-center'  >
                                <button className=" text-[14px]  ">Research</button>
                            </div>
                            <div className='lg:w-[64px] ResearchSection lg:h-[28px] lg:flex justify-center items-center'  >
                                <button className=" text-[14px]  ">UI UX</button>
                            </div>
                        </div>


                    </div>

                    <div className='popularClassBox lg:w-[370px] px-5 pt-[20px] pb-[30px]'>
                        <img src={design} alt="" />

                        <p className='gradient_text text-[14px] font-semibold mt-[28px]'>November 16, 2014</p>
                        <p className='text-[24px] font-semibold mt-[12px]'>User-Centered Design</p>
                        <p className='text-[16px] text-[#828489] mt-[10px]'>This is an approach that places the eusers at the center of the design proces involves understanding user needs..</p>

                        <div className='flex gap-[10px] mt-[24px]'>
                            <div className='lg:w-[84px] ResearchSection lg:h-[28px] lg:flex justify-center items-center'  >
                                <button className=" text-[14px]  ">Research</button>
                            </div>
                            <div className='lg:w-[64px] ResearchSection lg:h-[28px] lg:flex justify-center items-center'  >
                                <button className=" text-[14px]  ">UI UX</button>
                            </div>
                        </div>


                    </div>
                </div>

                {/* 2 */}

                <div className='lg:flex gap-[30px] mt-[30px]'>


                    <div className='popularClassBox lg:w-[770px] px-5 pt-[20px] pb-[30px]'>
                        <img src={img99} alt="" />

                        <p className='gradient_text text-[14px] font-semibold mt-[28px]'>March 10, 2014</p>
                        <p className='text-[24px] font-semibold mt-[12px]'>Agile Development Projects and Usability</p>
                        <p className='text-[16px] text-[#828489] mt-[10px]'>Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. </p>

                        <div className='flex gap-[10px] mt-[24px]'>
                            <div className='lg:w-[114px] ResearchSection lg:h-[28px] lg:flex justify-center items-center'  >
                                <button className=" text-[14px]  ">Programming</button>
                            </div>
                            <div className='lg:w-[84px] ResearchSection lg:h-[28px] lg:flex justify-center items-center'  >
                                <button className=" text-[14px]  ">Research</button>
                            </div>

                            <div className='lg:w-[113px] ResearchSection lg:h-[28px] lg:flex justify-center items-center'  >
                                <button className=" text-[14px]  ">Development</button>
                            </div>
                        </div>


                    </div>

                    <div className='popularClassBox lg:w-[370px] px-5 pt-[20px] pb-[30px]'>
                        <img src={threePillar} alt="" />

                        <p className='gradient_text text-[14px] font-semibold mt-[28px]'>November 16, 2014</p>
                        <p className='text-[24px] font-semibold mt-[12px]'>Three Pillars of User Delight</p>
                        <p className='text-[16px] text-[#828489] mt-[10px]'>Delight can be experienced ral, behavioral, and reflectively. A great design iselight can be experienced visceral, behavioral...</p>

                        <div className='flex gap-[10px] mt-[24px]'>
                            <div className='lg:w-[84px] ResearchSection lg:h-[28px] lg:flex justify-center items-center'  >
                                <button className=" text-[14px]  ">Research</button>
                            </div>
                            <div className='lg:w-[64px] ResearchSection lg:h-[28px] lg:flex justify-center items-center'  >
                                <button className=" text-[14px]  ">UI UX</button>
                            </div>
                        </div>


                    </div>
                </div>

                {/* See All Blogs */}
                <Link className='lg:w-[162px] Create mx-auto mt-[50px] lg:h-[56px] lg:flex justify-center items-center'  >

                    <button className=" text-[16px]  text-white font-semibold  ">See All Blogs</button>


                </Link>


                {/* Testimonials */}


                <div className='flex gap-[62px] mt-[170px] '>
                    <div className='lg:w-[595px]'>
                        <div className='flex gap-[10px]  items-center  '>
                            <hr className='hrLine' />
                            <p className='gradient_text  text-[20px]  font-semibold '>Reliable Tutors</p>

                        </div>

                        <h1 className=' lg:text-[54px] font-semibold mt-[20px] lg:leading-[70px]'>People Says About Courses</h1>




                    </div>

                    <div className='lg:w-[513px]'>
                        <p className='text-[20px] text-primary  lg:leading-[34px]'>Learning from renowned experts and engaging with a community of motivated learners can be a highly enriching experience. Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
                    </div>
                </div>

                <Link className='lg:w-[114px] Create  mt-[40px] lg:h-[56px] lg:flex justify-center items-center'  >

                    <button className=" text-[16px]  text-white font-semibold  ">See All</button>


                </Link>














            </div>


            <div className='bannerLeft flex items-center gap-[98px]'>
                <div className='lg:w-[622px] h-[370px]'>
                    <div id='#slider4' className=' popularClassBox  px-[40px] pt-[50px] pb-[60px]'>
                        <p className='text-[30px] font-semibold'>Jacob Jones</p>
                        <p className='text-[20px] text-[#828489] mt-[8px] font-medium'>Student, National University</p>

                        <div className='flex gap-[6px] mt-[14px]'>
                            <img src={yellowFStar} className='w-[18px] h-[18px]' alt="" />
                            <img src={yellowFStar} className='w-[18px] h-[18px]' alt="" />
                            <img src={yellowFStar} className='w-[18px] h-[18px]' alt="" />
                            <img src={yellowFStar} className='w-[18px] h-[18px]' alt="" />
                            <img src={yellowHStar} className='w-[18px] h-[18px]' alt="" />

                            <Link className='lg:w-[35px]  Rating lg:h-[20px] lg:flex justify-center items-center'   >




                                <button className=" text-[14px]  text-white font-semibold  ">4.5</button>


                            </Link>

                        </div>

                        <div className='lg:w-[542px] mt-[30px]'>
                            <p className='lg:text-[30px] text-primary  font-medium lg:leading-[40px]'>Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.</p>
                        </div>



                    </div>


                </div>

                <img src={manSection} className='lg:w-[490px] ' alt="" />
            </div>

            <div className=" flex gap-[50px] justify-center relative mt-[40px] ">

                <a href='#slider4' className='swipeBtn w-[84px] h-[68px] flex justify-center items-center'>
                    <BiSolidChevronLeft className='w-[28px] h-[28px]' />
                </a>
                <a href='#slider2' className='swipeBtn w-[84px] h-[68px] flex justify-center items-center'>
                    <BiSolidChevronRight className='w-[28px] h-[28px]' />
                </a>
            </div>



        </>
    );
};

export default ReliableTutors;